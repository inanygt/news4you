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

// Route::post('/users', function (Request $request) {
//     $user = DB::table('users')->insert([
//         'name' => $request->name,
//         'email' => $request->email,
//         'password' =>$request->password,
//         'birthdate' =>$request->birthdate 
//     ]);
//     return $user;
// });

Route::post('/users', function (Request $request) {
    $name = $request->input('name');
    $password = $request->input('password');
    $email = $request->input('email');
    $birthdate = $request->input('birthdate');

    if (DB::table('users')->where('name', $name)->exists()) {
        return response()->json([
            'message' => 'User already exists'
        ], 409);
    }

    DB::table('users')->insert([
        'name' => $name,
        'password' => Hash::make($password),
        'email' => $email,
        'birthdate' => $birthdate
    ]);

    return response()->json([
        'message' => 'User created'
    ], 201);
});