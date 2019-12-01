<?php

namespace App\Http\Controllers\API\v1;

use App\Events\NewMultipleImagesUploadedEvent;
use App\Http\Requests\v1\PostCreateRequest;
use App\Http\Requests\v1\PostUpdateRequest;
use App\Post;
use App\Http\Resources\v1\PostsResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['store','update','destroy']);
    }

    public function index(): AnonymousResourceCollection
    {
        $posts = Post::latest()->with('category', 'store.user', 'pictures')->paginate(50);
        return PostsResource::collection($posts);
    }

    public function store(PostCreateRequest $request)
    {
		if(!auth('api')->user()->store){
			return response()->json([ 'errors' => [ 'name' => 'User doesn\'t have an existing store' ] ],422);
		}
        $request->merge(['store_id' => auth('api')->user()->store->id ?: 0 ]);
        $post =  Post::create($request->only(['name','description','category_id','price','store_id']));
		if($request->images){
			$params = [
				'images' => $request->images,
				'object' => $post,
				'path' => 'images/posts/'
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
        $post->update($request->only(['name','description','category_id','price']));
		if($request->images){
			$params = [
				'images' => $request->images,
				'object' => $post,
				'path' => 'images/posts/'
			];
			event(new NewMultipleImagesUploadedEvent($params));
		}
        return new PostsResource($post);
    }

    public function destroy(Post $post): JsonResponse
    {
        $this->authorize('delete', $post);
		if($post->delete()){
            return response()->json(['success' => 'true']);
        }
        return response()->json(['error' => 'Error deleting post'],422);
    }
}
