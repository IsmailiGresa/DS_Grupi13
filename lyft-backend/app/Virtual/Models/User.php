<?php

namespace App\Virtual\Models;

/**
 * @OA\Schema(
 *     schema="User",
 *     title="User",
 *     description="User model",
 *
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="first_name", type="string"),
 *     @OA\Property(property="last_name", type="string"),
 *     @OA\Property(property="avatar", type="string"),
 *     @OA\Property(property="phone_number", type="string"),
 *     @OA\Property(property="birthday", type="string", format="date"),
 *     @OA\Property(property="home_address", type="string"),
 *     @OA\Property(property="work_address", type="string"),
 *     @OA\Property(property="rides", type="integer"),
 *     @OA\Property(property="email", type="string"),
 * )
 */
class User
{
}
