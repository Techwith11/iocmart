<?php

namespace App\Http\Controllers\API\v1;

use App\Events\NewSingleImageUploadedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\v1\UserCreateRequest;
use App\Http\Requests\v1\UserLoginRequest;
use App\Http\Requests\v1\UserPasswordUpdateRequest;
use App\Http\Resources\v1\ProfileResource;
use App\User;
use Illuminate\Http\File;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['user', 'password']);
    }

    public function user(): ProfileResource
    {
        $user = User::where('id', auth('api')->id())->with(['picture','store'])->first()->append('currentCart');
        return new ProfileResource($user);
    }

    public function docs()
	{
		return response()->file(public_path('documentation/api.html'));
	}

    public function password(UserPasswordUpdateRequest $request): JsonResponse
	{
		auth('api')->user()->update(['password' => $request['password']]);
		return response()->json(['data' => 'true']);
	}

    public function login(UserLoginRequest $request): ProfileResource
    {
        if(auth()->attempt(['email' => $request['email'], 'password' => $request['password']])){
            return new ProfileResource(auth()->user());
        }
        return response()->json(['password' => trans('auth.failed')],400);
    }

    public function register(UserCreateRequest $request): ProfileResource
    {
        $user = User::create($request->except(['password_confirmation']));
        auth()->login($user);
        return new ProfileResource($user);
    }
}
