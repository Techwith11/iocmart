<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class CartsResource extends JsonResource
{
	public function toArray($request): array
	{
		return [
			'id' => $this->id,
			'user' => $this->user,
			'orders' => $this->orders,
			'created_at' => $this->created_at,
			'updated_at' => $this->updated_at,
		];
	}
}
