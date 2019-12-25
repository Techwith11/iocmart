<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\v1\OrderCreateRequest;
use App\Http\Requests\v1\OrderUpdateRequest;
use App\Http\Resources\v1\OrdersResource;
use App\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class OrdersController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth:api')->except(['index', 'show']);
	}

    public function index()
    {
		return Order::queryBuilder();
    }

    public function store(OrderCreateRequest $request): OrdersResource
    {
		$this->authorize('create', Order::class);
		$request->merge(['cart_id' => auth('api')->user()->currentCart()->id ]);
		$order =  Order::create($request->all());
		return new OrdersResource($order);
    }

    public function show(Order $order): OrdersResource
    {
		$this->authorize('view', $order);
		$order = Order::where('id',$order->id)->with('post', 'user')->first();
		return new OrdersResource($order);
    }

    public function update(OrderUpdateRequest $request, Order $order): OrdersResource
    {
		$this->authorize('update', $order);
		$order->update($request->all());
		return new OrdersResource($order);
    }

    public function destroy(Order $order): JsonResponse
    {
		$this->authorize('delete', $order);
		if($order->delete()){
			return response()->json(['data' => 'true']);
		}
		return response()->json(['data' => 'Error deleting order'],422);
    }
}
