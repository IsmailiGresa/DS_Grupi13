<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/', function () {
    return view('welcome');
});
use App\Http\Controllers\GiftCardHistoryController;
use App\Http\Controllers\InviteHistoryController;





Route::group(['middleware' => ['web']], function () {
    Route::get('/gift-card-history', [GiftCardHistoryController::class, 'index']);
    Route::post('/gift-card-history', [GiftCardHistoryController::class, 'store']);
    Route::get('/invite-history', [InviteHistoryController::class, 'index']);
    Route::post('/invite-history', [InviteHistoryController::class, 'store']);
    Route::get('/invite-history', [InviteHistoryController::class, 'index']);
    Route::put('/invite-history/{id}', [InviteHistoryController::class, 'update']);
    Route::delete('/invite-history/{id}', [InviteHistoryController::class, 'destroy']);

});
