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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// get all users 
Route::get('/users', function () {
    return DB::table('users')->get(); 
});

// Add user to database 
// Route::post()

// add todo to database
// Route::post('/todos', function (Request $request) {
// $todo = DB::table('todos')->insert([ 
//     'title' => $request->title, 
//     'status' => $request->status
// ]);
// return $todo; 
// });

// // Get user id
// Route::get('/users/{id}', function ($id) {
//     return DB::table('users')->where('id', $id)->first(); 
// });

