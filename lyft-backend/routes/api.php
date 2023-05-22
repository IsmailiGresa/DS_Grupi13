<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Donation\DonationController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\GiftCardHistoryController;


Route::post('/login', LoginController::class);
Route::post('/register', [RegisterController::class, 'register']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('users', [UserController::class, 'index']);
    Route::post('donations', [DonationController::class, 'store']);
    Route::put('donations', [DonationController::class, 'update']);
    Route::delete('donations', [DonationController::class, 'destroy']);
});
Route::get('/gift-card-history', [GiftCardHistoryController::class, 'index']);
Route::post('/gift-card-history', [GiftCardHistoryController::class, 'store']);

