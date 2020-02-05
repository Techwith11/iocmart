<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class OrdersResource extends JsonResource
{
	public function toArray($request): array
	{
		return [
			'id' => $this->id,
			'cart_id' => $this->cart_id,
			'cart' => $this->cart,
			'post' => $this->post,
			'post_id' => $this->post_id,
			'quantity' => $this->quantity,
			'created_at' => $this->created_at,
			'updated_at' => $this->updated_at,
		];
	}
}
