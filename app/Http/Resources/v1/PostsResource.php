<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class PostsResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
			'is_ordered_by' => $this->is_ordered_by,
            'store' => $this->store,
			'quantity' => $this->quantity,
            'category' => $this->category,
            'pictures' => $this->pictures,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
