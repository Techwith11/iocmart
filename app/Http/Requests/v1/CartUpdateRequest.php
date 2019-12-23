<?php

namespace App\Http\Requests\v1;

use Illuminate\Foundation\Http\FormRequest;

class CartUpdateRequest extends FormRequest
{
	public function authorize(): bool
	{
		return true;
	}

	public function rules(): array
	{
		return [
			'checked_out' => 'sometimes|numeric',
			'posts' => 'required|array'
		];
	}
}
