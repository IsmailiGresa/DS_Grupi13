<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InviteHistory extends Model
{
    protected $table = 'invite_histories';
    protected $fillable = [
        'date',
        'code',
        'applications',
        'activations',
        'earnings',
    ];
}
