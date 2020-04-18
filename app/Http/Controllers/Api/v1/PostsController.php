<?php

namespace App\Http\Controllers\API\v1;

use App\Events\NewMultipleImagesUploadedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\v1\PostCreateRequest;
use App\Http\Requests\v1\PostUpdateRequest;
use App\Http\Resources\v1\PostsResource;
use App\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Pipeline\Pipeline;

class PostsController extends Controller
{
    public function __construct()
	{
		$this->middleware('auth:api')->except(['index', 'show']);
	}

    public function index()
    {
		return Post::queryBuilder();
    }

    public function store(PostCreateRequest $request)
    {
		$this->authorize('create', Post::class);
		if(!auth('api')->user()->store){
			return response()->json([ 'errors' => [ 'name' => 'User does not have an existing store' ] ],400);
		}
        $request->merge(['store_id' => auth('api')->user()->store->id ?: 0 ]);
        $post =  Post::create($request->only(['name','description','category_id','price','store_id', 'discount','quantity']));
		if($request->images){
			$params = [
				'images' => $request->images,
				'object' => $post
			];
			event(new NewMultipleImagesUploadedEvent($params));
        }
        return new PostsResource($post);
    }

    public function show(Post $post): PostsResource
    {
        $post = Post::where('id',$post->id)->with('category', 'store.user', 'pictures')->first();
        return new PostsResource($post);
    }

    public function update(PostUpdateRequest $request, Post $post): PostsResource
    {
		$this->authorize('update', $post);
        $post->update($request->only(['name','description','category_id','price','discount','quantity']));
		if($request->images){
			$params = [
				'images' => $request->images,
				'object' => $post
			];
			event(new NewMultipleImagesUploadedEvent($params));
		}
        return new PostsResource($post);
    }

    public function destroy(Post $post): JsonResponse
    {
        $this->authorize('delete', $post);
		if($post->delete()){
            return response()->json(['data' => 'true']);
        }
        return response()->json(['data' => 'Error deleting post'],422);
    }
}
