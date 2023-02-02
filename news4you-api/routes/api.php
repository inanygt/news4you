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

// get all topics
Route::get('/topics', function () {
    return DB::table('topics')->get(); 
});

// post topics of user id
Route::post('/topics/{user_id}', function (Request $request, $user_id) {
    DB::table('topic_user')->insert([
        // 'id' => $request->input('id'),
        // 'user_id' => {$request->input('user_id'),}
        'user_id' => $user_id,
        'topic_id' => $request->input('topic_id'),

    ]);
});


// Get user login
Route::get('/users/{userName}', function ($userName) {
    
    if (!DB::table('users')->where('userName', $userName)->exists()) {
        return response()->json([
            'message' => 'User not found'
        ], 404);
    }
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

// BOOKMARKS // BOOKMARKS // BOOKMARKS  // 

// get all bookmarks 
Route::get('/bookmarks', function () {
    return DB::table('bookmarks')->get(); 
});

// get bookmarks for specific user id
Route::get('/bookmarks/{user_id}', function ($user_id) {
return DB::table('bookmarks')->where('user_id', $user_id)->get();
});

// Get bookmark id of specific user id
Route::get('/bookmarks/{user_id}/{id}', function ($user_id, $id) {
return DB::table('bookmarks')->where('user_id', $user_id)->where('id', $id)->first();
});

// add bookmark to user
Route::post('/bookmarks', function (Request $request) {
    DB::table('bookmarks')->insert([

        'id' => $request->input('id'),
        'user_id' => $request->input('user_id'),
        'url' => $request->input('url'),
        'title' => $request->input('title'),
        // 'createdAt' => $createdAt,
    ]);
});

// Delete bookmark
Route::delete('/bookmarks/{user_id}/{id}', function ($user_id, $id) {
    // if (!DB::table('bookmarks')->where('id', $id)->exists()) {
    //     return response()->json([
    //         'message' => 'Message not found'
    //     ], 404);
    // }

    DB::table('bookmarks')
    ->where('id', $id)
    ->where('user_id', $user_id)
    ->delete();

    return response()->json([
        'message' => 'Bookmark deleted'
    ], 200);
});