<?php

namespace App\Http\Requests\v1;

use Illuminate\Foundation\Http\FormRequest;

class OrderUpdateRequest extends FormRequest
{
    public function authorize(): bool
	{
		return true;
	}

    public function rules(): array
    {
        return [
			'quantity' => 'required|numeric'
        ];
    }
}
