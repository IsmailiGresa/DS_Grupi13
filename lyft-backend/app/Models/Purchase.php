<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Purchase extends Model
{
    protected $table = 'purchases';

    public function giftCardHistory(): BelongsTo
    {
        return $this->belongsTo(GiftCardHistory::class);
    }
}
