<?php

namespace App;

use App\Observers\CategoryObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $guarded = [];

	public static function boot(): void
	{
		parent::boot();
		self::observe(CategoryObserver::class);
	}

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function subs(): HasMany
    {
        return $this->hasMany(__CLASS__,'parent_id','id');
    }

    public function parent(): HasOne
    {
        return $this->hasOne(__CLASS__, 'id', 'parent_id');
    }
}
