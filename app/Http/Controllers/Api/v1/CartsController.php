<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\v1\CartCreateRequest;
use App\Http\Requests\v1\CartUpdateRequest;
use App\Http\Resources\v1\CartsResource;
use App\Cart;
use App\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CartsController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth:api')->except(['index', 'show']);
	}

    public function index()
    {
		return Cart::queryBuilder();
    }

    public function store(CartCreateRequest $request): CartsResource
    {
		$this->authorize('create', Cart::class);
		$request->merge(['user_id' => auth('api')->id ]);
		$cart =  Cart::create($request->all());
		return new CartsResource($cart);
    }

    public function show(Cart $cart): CartsResource
    {
		$this->authorize('view', $cart);
		$cart = Cart::where('id',$cart->id)->with('orders', 'user')->first();
		return new CartsResource($cart);
    }

    public function update(CartUpdateRequest $request, Cart $cart): CartsResource
    {
		$this->authorize('update', $cart);
		$cart->update($request->all());
		return new CartsResource($cart);
    }

    public function destroy(Cart $cart): JsonResponse
    {
		$this->authorize('delete', $cart);
		if($cart->delete()){
			return response()->json(['data' => 'true']);
		}
		return response()->json(['data' => 'Error deleting cart'],422);
    }
}
