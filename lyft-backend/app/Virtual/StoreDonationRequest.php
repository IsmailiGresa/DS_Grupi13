<?php

namespace App\Virtual;

/**
 * @OA\Schema(
 *      title="Register request",
 *      description="Register User",
 *      type="object",
 *      required={"charity_id"},
 *
 *      @OA\Property(property="charity_id", type="integer"),
 *      @OA\Property(property="amount", type="float"),
 *
 * )
 */
class StoreDonationRequest
{
}
