<?php

namespace App\Http\Requests\v1;

use Illuminate\Foundation\Http\FormRequest;

class PictureUpdateRequest extends FormRequest
{
    public function authorize(): bool
	{
		return true;
	}

    public function rules(): array
    {
        return [
			'filename' => 'required|string',
			'imageable_type' => 'required|string',
			'imageable_id' => 'required|numeric',
        ];
    }
}
