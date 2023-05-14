<?php

namespace App\Models;

use App\Models\User;
use App\Models\Ability;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users() : HasMany
    {
        return $this->hasMany(User::class);
    }

    public function abilities() : BelongsToMany
    {
        return $this->belongsToMany(Ability::class);
    }
}
