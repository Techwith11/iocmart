<?php

namespace App\Http\Requests\v1;

use Illuminate\Foundation\Http\FormRequest;

class CartAddOrderRequest extends FormRequest
{
	public function authorize(): bool
	{
		return true;
	}

	public function rules(): array
	{
		return [
			'post_id' => 'required|numeric',
			'quantity' => 'required|numeric'
		];
	}
}
