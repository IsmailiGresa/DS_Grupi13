<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InviteHistoryController;
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
Route::get('/invite-history', [InviteHistoryController::class, 'index']);
Route::post('/invite-history', [InviteHistoryController::class, 'store']);
Route::get('/invite-history/{id}', [InviteHistoryController::class, 'show']);
Route::put('/invite-history/{id}', [InviteHistoryController::class, 'update']);
Route::delete('/invite-history/{id}', [InviteHistoryController::class, 'destroy']);

Route::get('/', function () {
    return view('welcome');
});

