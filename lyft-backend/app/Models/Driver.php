<?php

namespace App\Models;

use App\Models\Scopes\DriverScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Driver extends User
{
    use HasFactory;

    protected $table = 'users';

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new DriverScope);
    }

    public function rides(): HasMany
    {
        return $this->hasMany(Ride::class);
    }
}
