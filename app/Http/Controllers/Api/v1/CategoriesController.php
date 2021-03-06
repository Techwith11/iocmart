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

    public function index()
    {
		return Category::queryBuilder();
    }

    public function store(CategoryCreateRequest $request): CategoriesResource
    {
		$this->authorize('create', Category::class);
        $category = Category::create($request->all());
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
		$category->update($request->all());
        return new CategoriesResource($category);
    }

    public function destroy(Category $category): JsonResponse
    {
        $this->authorize('delete', $category);
		if($category->delete()){
            return response()->json(['data' => 'true']);
        }
        return response()->json(['data' => 'Error deleting category'],422);
    }
}
