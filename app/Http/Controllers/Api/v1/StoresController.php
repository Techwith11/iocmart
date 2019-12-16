<?php

namespace App\Http\Controllers\API\v1;

use App\Events\NewSingleImageUploadedEvent;
use App\Http\Requests\v1\ImageUploadRequest;
use App\Http\Requests\v1\StoreCreateRequest;
use App\Http\Requests\v1\StoreUpdateRequest;
use App\Http\Resources\v1\PostsResource;
use App\Http\Resources\v1\StoresResource;
use App\Post;
use App\Store;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class StoresController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['store','update', 'logo', 'destroy']);
    }

    public function index(): AnonymousResourceCollection
	{
        $stores = Store::latest()->with('posts.category','user', 'picture')->paginate(50);
        return StoresResource::collection($stores);
    }

	public function query()
	{
		return Store::queryBuilder();
	}

    public function store(StoreCreateRequest $request)
    {
		$this->authorize('create', Store::class);
		if(auth('api')->user()->store){
			return response()->json([ 'errors' => [ 'name' => 'User has an existing store' ] ],422);
		}
		$request->merge(['user_id' => auth('api')->user()->id ?: 0 ]);
        $store = Store::create($request->all());
		return new StoresResource($store);
    }

    public function show(Store $store): StoresResource
    {
        $store = Store::where('id',$store->id)->with('posts.category','user', 'picture')->first();
        return new StoresResource($store);
    }

    public function logo(ImageUploadRequest $request, Store $store): JsonResponse
	{
		$this->authorize('update', $store);
		$params = [
			'image' => $request->image,
			'object' => $store,
			'path' => 'images/stores/'
		];
		event(new NewSingleImageUploadedEvent($params));
		return response()->json(['data' => 'true']);
	}

    public function update(StoreUpdateRequest $request, Store $store): StoresResource
    {
		$this->authorize('update', $store);
        $store->update($request->all());
        return new StoresResource($store);
    }

    public function destroy(Store $store): JsonResponse
    {
        $this->authorize('delete', $store);
        if($store->delete()){
            return response()->json(['data' => 'true']);
        }
        return response()->json(['data' => 'Error deleting store'],422);
    }
}
