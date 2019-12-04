<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class OrdersResource extends JsonResource
{
	public function toArray($request): array
	{
		return [
			'id' => $this->id,
			'user' => $this->user,
			'post' => $this->post,
			'quantity' => $this->quantity,
			'created_at' => $this->created_at,
			'updated_at' => $this->updated_at,
		];
	}
}
