<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Redemption extends Model
{
    protected $table = 'redemptions';

    public function giftCardHistory(): BelongsTo
    {
        return $this->belongsTo(GiftCardHistory::class);
    }

}
