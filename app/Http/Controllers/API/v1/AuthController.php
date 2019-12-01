<?php

namespace App\Http\Controllers\API\v1;

use App\Events\NewSingleImageUploadedEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\UsersResource;
use App\Http\Requests\v1\UserCreateRequest;
use App\Http\Requests\v1\UserLoginRequest;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['profile']);
    }

    public function profile(): UsersResource
    {
        $user = auth('api')->user();
        return new UsersResource($user);
    }

    public function login(UserLoginRequest $request): JsonResponse
    {
        if(auth()->attempt(['email' => $request['email'], 'password' => $request['password']])){
            return response()->json([ 'data' => auth()->user()->passportToken ]);
        }
        return response()->json(['password' => trans('auth.failed')],422);
    }

    public function register(UserCreateRequest $request): JsonResponse
    {
        $request->merge([
            'password' => Hash::make($request['password']),
            'role' => $request['role'] ?: 0
        ]);
        $user = User::create($request->only(['name','email','password','phone','role']));
        if($request->image){
        	$params = [
				'image' => $request->image,
				'object' => $user,
				'path' => 'images/users/'
			];
        	event(new NewSingleImageUploadedEvent($params));
        }
        auth()->login($user);
        return response()->json([ 'data' => $user->passportToken ]);
    }
}
