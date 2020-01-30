<?php

namespace App\Http\Resources\v1;

use App\Store;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'user' => [
                'id' => $this->id,
                'name' => $this->name,
                'email' => $this->email,
                'email_verified_at' => $this->email_verified_at,
                'role' => $this->role,
                'phone' => $this->phone,
                'picture' => $this->picture,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ],
            'token' => $this->passport_token,
            'store' => $this->store,
			'cart' => $this->currentCart
        ];
    }
}
