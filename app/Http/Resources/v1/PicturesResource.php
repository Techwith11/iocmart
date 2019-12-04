<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class PicturesResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'filename' => $this->filename,
            'imageable' => $this->imageable,
            'imageable_type' => $this->imageable_type,
			'created_at' => $this->created_at,
			'updated_at' => $this->updated_at,
        ];
    }
}
