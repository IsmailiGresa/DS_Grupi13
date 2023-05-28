<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GiftCardHistory extends Model
{
    protected $table = 'gift_card_history';

    public function purchases(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }

    public function redemptions(): HasMany
    {
        return $this->hasMany(Redemption::class);
    }
}
