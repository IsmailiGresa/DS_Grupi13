<?php

namespace App\Policies;

use App\Models\Promo;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PromoPolicy
{
    use HandlesAuthorization;

    public const PERMISSIONS = [
        'browse promos',
        'read promos',
        'add promos',
        'edit promos',
        'delete promos',
    ];

    /**
     * Determine whether to bypass all policy methods or fallback.
     *
     * @param \App\AdminUser $user
     * @return true|false|null true/false would allow/deny action and bypass all other methods respectively and null is fallback to other methods
     */
    public function before($user, $ability)
    {
        if ($user->hasRole('admin')) {
            return true;
        }
    }

    public function viewAny($user)
    {
        //
    }

    public function view($user, Promo $promo)
    {
        //
    }

    public function create($user)
    {
        //
    }

    public function update($user, Promo $promo)
    {
        //
    }

    public function delete($user, Promo $promo)
    {
        //
    }
}
