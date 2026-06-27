<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HairCutController;
use App\Http\Controllers\ReservationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/reservations', [ReservationController::class, 'store']);
Route::get('/haircuts', [HairCutController::class, 'index']);
Route::get('/haircuts/{hairCut}', [HairCutController::class, 'show']);

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/reservations', [ReservationController::class, 'index']);
    Route::get('/reservations/{reservation}',[ReservationController::class, 'show']);
    Route::put('/reservations/{reservation}', [ReservationController::class, 'update']);
    Route::delete('/reservations/{reservation}', [ReservationController::class, 'delete']);

    Route::post('/haircuts', [HairCutController::class, 'store']);
    Route::put('/haircuts/{hairCut}', [HairCutController::class, 'update']);
    Route::delete('/haircuts/{hairCut}', [HairCutController::class, 'destroy']);
});

Route::login('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
