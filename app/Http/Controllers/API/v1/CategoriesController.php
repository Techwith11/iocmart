<?php

namespace App\Http\Controllers\API\v1;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Requests\v1\CategoryCreateRequest;
use App\Http\Requests\v1\CategoryUpdateRequest;
use App\Http\Resources\v1\CategoriesResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoriesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index(): AnonymousResourceCollection
    {
        $categories = Category::latest()->with('posts.store.user','parent','subs')->paginate(50);
        return CategoriesResource::collection($categories);
    }

    public function store(CategoryCreateRequest $request): CategoriesResource
    {
		$this->authorize('create', Category::class);
        $category = Category::create($request->only(['name', 'parent_id']));
        return new CategoriesResource($category);
    }

    public function show(Category $category): CategoriesResource
    {
        $category = Category::where('id',$category->id)->with('posts.store.user','parent','subs')->first();
        return new CategoriesResource($category);
    }

    public function update(CategoryUpdateRequest $request, Category $category): CategoriesResource
    {
		$this->authorize('update', $category);
		$category->update($request->only(['name', 'parent_id']));
        return new CategoriesResource($category);
    }

    public function destroy(Category $category): JsonResponse
    {
        $this->authorize('delete', $category);
		if($category->delete()){
            return response()->json(['success' => 'true']);
        }
        return response()->json(['error' => 'Error deleting category'],422);
    }
}
