<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PenumpangKeretaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/penumpang', [PenumpangKeretaController::class, 'index']);
Route::get('/hasilModel', [PenumpangKeretaController::class, 'hasilModel']);
Route::post('/tambahData', [PenumpangKeretaController::class, 'tambahData']);
Route::post('/addHasilModel', [
    PenumpangKeretaController::class,
    'addHasilModel',
]);
Route::delete('/deleteData/{id}', [
    PenumpangKeretaController::class,
    'deleteData',
]);
Route::delete('/deleteHasilModel/{id}', [
    PenumpangKeretaController::class,
    'deleteHasilModel',
]);
Route::put('/updateData/{id}', [
    PenumpangKeretaController::class,
    'updateData',
]);
