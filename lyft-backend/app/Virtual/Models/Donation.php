<?php

namespace App\Virtual\Models;

/**
 * @OA\Schema(
 *     schema="Donation",
 *     title="Donation",
 *     description="Donation model",
 *
 *     @OA\Property(property="user_id", type="integer"),
 *     @OA\Property(property="chairity_id", type="integer"),
 *     @OA\Property(property="amount", type="decimal"),
 * )
 */
class Donation
{
}
