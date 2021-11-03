<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'paypal'], function () {
  Route::post('/order/create', [\App\Http\Controllers\PaypalController::class, 'create']);
  Route::post('/order/capture/', [\App\Http\Controllers\PaypalController::class, 'capture']);
});
