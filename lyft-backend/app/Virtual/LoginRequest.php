<?php

namespace App\Virtual;

/**
 * @OA\Schema(
 *      title="Login request",
 *      description="Login User",
 *      type="object",
 *      required={"email"},
 *      required={"password"},
 *      @OA\Property(property="email", type="string"),
 *      @OA\Property(property="password", type="string"),
 * )
 */
class LoginRequest
{
}
