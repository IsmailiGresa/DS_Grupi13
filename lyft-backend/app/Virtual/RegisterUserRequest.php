<?php

namespace App\Virtual;

/**
 * @OA\Schema(
 *      title="Register request",
 *      description="Register User",
 *      type="object",
 *      required={"first_name"},
 *      required={"last_name"},
 *      required={"email"},
 *      required={"password"}
 * )
 */
class RegisterUserRequest
{
}
