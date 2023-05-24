<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InviteHistory extends Model
{
    protected $table = 'invite_histories';
    protected $fillable = [
        'date',
        'code',
        'applications',
        'activations',
        'earnings',
        'id_user',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
