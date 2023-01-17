<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// get all users 
Route::get('/users', function () {
    return DB::table('users')->get(); 
});

// Add user to database 
Route::post('/users', function (Request $request) {
    $user = DB::table('users')->insert([
        'name' => $request->name,
        'email' => $request->email,
        'password' =>$request->password
    ]);
    return $user;
});

