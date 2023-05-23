<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Donation\DonationController;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\InviteHistoryController;
use Illuminate\Support\Facades\Route;

Route::post('/login', LoginController::class);
Route::post('/register', [RegisterController::class, 'register']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('users', [UserController::class, 'index']);
    Route::post('donations', [DonationController::class, 'store']);
    Route::put('donations', [DonationController::class, 'update']);
    Route::delete('donations', [DonationController::class, 'destroy']);
    Route::post('/promos', [PromoController::class, 'store']);
    Route::put('/promos/{promo}', [PromoController::class, 'update']);
    Route::delete('/promos/{promo}', [PromoController::class, 'destroy']);
    Route::get('rides', [RideController::class, 'index']);
    Route::get('/invite-history', [InviteHistoryController::class, 'index']);
    Route::post('/invite-history', [InviteHistoryController::class, 'store']);
    Route::get('/invite-history/{id}', [InviteHistoryController::class, 'show']);
    Route::put('/invite-history/{id}', [InviteHistoryController::class, 'update']);
    Route::delete('/invite-history/{id}', [InviteHistoryController::class, 'destroy']);
});




