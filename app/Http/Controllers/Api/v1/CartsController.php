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
		$this->middleware('auth:api')->except(['query']);
	}

    public function index(): AnonymousResourceCollection
    {
		$this->authorize('viewAny', Cart::class);
		$carts = Cart::myCarts()->with('orders')->paginate(env('API_QUERY_LIMIT',50));
		return CartsResource::collection($carts);
    }

	public function query()
	{
		return Cart::queryBuilder();
	}

    public function store(CartCreateRequest $request): CartsResource
    {
		$this->authorize('create', Cart::class);
		$request->merge(['user_id' => auth('api')->id ]);
		$cart =  Cart::create($request->except(['posts']));
		$cart->orders->createMany($request['posts']);
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
		$cart->update($request->except(['posts']));
		Order::where('cart_id',$cart->id)->delete();
		$cart->orders->createMany($request['posts']);
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
