<?php

namespace App\Http\Controllers\API\v1;

use App\Events\NewSingleImageUploadedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\v1\ImageUploadRequest;
use App\Http\Requests\v1\UserCreateRequest;
use App\Http\Requests\v1\UserUpdateRequest;
use App\Http\Resources\v1\UsersResource;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'store', 'show']);
    }

    public function index()
    {
		return User::queryBuilder();
    }

    public function store(UserCreateRequest $request): UsersResource
    {
		$user = User::create($request->except(['password_confirmation']));
		return new UsersResource($user);
    }

    public function show(User $user): UsersResource
    {
    	$user = User::where('id',$user->id)->with('store', 'picture')->first();
        return new UsersResource($user);
    }

	public function profile(ImageUploadRequest $request, User $user): JsonResponse
	{
		$this->authorize('update', $user);
		$params = [
			'image' => $request->image,
			'object' => $user
		];
		event(new NewSingleImageUploadedEvent($params));
		return response()->json(['data' => 'true']);
	}

    public function update(UserUpdateRequest $request, User $user): UsersResource
    {
		$this->authorize('update', $user);
        $user->update($request->all());
        return new UsersResource($user);
    }

    public function destroy(User $user): JsonResponse
    {
        $this->authorize('delete', $user);
		if($user->delete()){
            return response()->json(['data' => 'true']);
        }
        return response()->json(['data' => 'Error deleting user'],422);
    }
}
