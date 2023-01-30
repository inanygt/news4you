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


// Get user login
Route::get('/users/{userName}', function ($userName) {
    
    if (!DB::table('users')->where('userName', $userName)->exists()) {
        return response()->json([
            'message' => 'User not found'
        ], 404);
    }

    // return DB::table('users')->where('userName', $userName)->first();
    // do the same but with plain sql
    return DB::select('select * from users where userName = ?', [$userName]);

});

// Add user to database 
Route::post('/users', function (Request $request) {
    $userName = $request->input('userName');
    $password = $request->input('password');
    $email = $request->input('email');
    $birthdate = $request->input('birthdate');
    $createdAt = $request->input('createdAt');
    $rememberToken = $request->input('rememberToken');

    if (DB::table('users')->where('userName', $userName)->exists()) {
        return response()->json([
            'message' => 'User already exists'
        ], 409);
    }

    DB::table('users')->insert([
        'userName' => $userName,
        'password' => Hash::make($password),
        'email' => $email,
        'birthdate' => $birthdate,
        'createdAt' => $createdAt,
        'rememberToken' => $rememberToken
    ]);

    return response()->json([
        'message' => 'User created'
    ], 201);
});

// add bookmark to user

// Add user to database 
Route::post('/bookmarks', function (Request $request) {
    $title = $request->input('title');
    $url = $request->input('url');
    $user_id = $request->input('user_id');
    // $userName = $request->input('userName');
    // $createdAt = $request->input('createdAt');

    // if (DB::table('users')->where('userName', $userName)->exists()) {
    //     return response()->json([
    //         'message' => 'User already exists'
    //     ], 409);
    // }

    DB::table('bookmarks')->insert([
        'user_id' => $user_id,
        'url' => $url,
        'title' => $title,
        // 'createdAt' => $createdAt,
    ]);

    // return response()->json([
    //     'message' => 'User created'
    // ], 201);
});