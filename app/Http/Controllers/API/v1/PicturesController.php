<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Requests\v1\PictureCreateRequest;
use App\Http\Requests\v1\PictureUpdateRequest;
use App\Http\Resources\v1\PicturesResource;
use App\Picture;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PicturesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(): AnonymousResourceCollection
    {
		$this->authorize('viewAny', Picture::class);
        $pictures = Picture::latest()->with('imageable')->paginate(50);
        return PicturesResource::collection($pictures);
    }

    public function store(PictureCreateRequest $request): PicturesResource
    {
		$this->authorize('create', Picture::class);
        $picture = Picture::create($request->only(['filename', 'imageable_type', 'imageable_id']));
        return new PicturesResource($picture);
    }

    public function show(Picture $picture): PicturesResource
    {
		$this->authorize('view', $picture);
        $picture = Picture::where('id',$picture->id)->with('imageable')->first();
        return new PicturesResource($picture);
    }

    public function update(PictureUpdateRequest $request, Picture $picture): PicturesResource
    {
		$this->authorize('update', $picture);
        $picture->update($request->only(['filename', 'imageable_type', 'imageable_id']));
        return new PicturesResource($picture);
    }

    public function destroy(Picture $picture): JsonResponse
    {
		$this->authorize('delete', $picture);
        if($picture->delete()){
			return response()->json(['success' => 'true']);
		}
		return response()->json(['error' => 'Error deleting picture'],422);
    }
}
