<?php

namespace App\Observers;

use App\Events\NewOrChangedEmailEvent;
use App\Events\NewUserRegisteredEvent;
use App\User;

class UserObserver
{
    public function created(User $user): void
    {
		event(new NewUserRegisteredEvent($user));
    	$user->passport_token = $user->createToken(env('TOKEN_KEY'))->accessToken;
        $user->save();
    }

    public function updated(User $user): void
    {
		if($user->isDirty('email')){
			event(new NewOrChangedEmailEvent($user));
		}
    }

    public function deleting(User $user): void
    {
        if($user->store) {
            $user->store->delete();
        }

        if($user->tokens){
            $user->tokens->each(function($token){
                $token->delete();
            });
        }

        if($user->picture){
            $user->picture->delete();
        }
    }

    public function restored(User $user): void
    {
        //
    }

    public function forceDeleted(User $user): void
    {
        //
    }
}
