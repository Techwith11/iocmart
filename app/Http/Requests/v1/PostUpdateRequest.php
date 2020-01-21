<?php

namespace App\Http\Requests\v1;

use Illuminate\Foundation\Http\FormRequest;

class PostUpdateRequest extends FormRequest
{
    public function authorize(): bool
	{
		return true;
	}

    public function rules(): array
    {
        return [
			'name' => 'required|string|min:3',
			'description' => 'string',
			'category_id' => 'required|numeric',
			'price' => 'required|numeric',
			'images' => 'sometimes|array',
			'quantity' => 'required|numeric|min:1',
			'discount' => 'sometimes|numeric|min:0',
        ];
    }
}
