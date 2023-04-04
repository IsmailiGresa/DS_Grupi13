<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class RegisterController extends ApiController
{
    public function register(RegisterUserRequest $request): JsonResponse
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);

        $user = User::create($data);

        $token = $user->createToken('uberToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return $this->showMessage($response, 201);
    }
}
