<?php

namespace App;

use App\Http\Filters\RegisterFilters;
use App\Observers\UserObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable,HasApiTokens,RegisterFilters;

    protected $guarded = [];

    protected $hidden = [
        'password', 'passport_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
		'phone' => 'object',
    ];

    public static function boot(): void
	{
		parent::boot();
		self::observe(UserObserver::class);
	}

	public function setPasswordAttribute($password): void
	{
		$this->attributes['password'] = bcrypt($password);
	}

	public function isAdmin(): bool
	{
		return $this->role === '1';
	}

    public function picture(): MorphOne
    {
        return $this->morphOne(Picture::class,'imageable');
    }

    public function store(): HasOne
    {
        return $this->hasOne(Store::class);
    }

	public function carts(): HasMany
	{
		return $this->hasMany(Cart::class);
	}

	public function getCurrentCartAttribute(): Model
	{
		return $this->carts()->notCheckedOut()->latest()->first() ?: $this->carts()->create([]);
	}
}
