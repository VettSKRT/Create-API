<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

Route::apiResource('books', BookController::class);
// This will create the following routes:
// GET /api/books - index
// GET /api/books/{id} - show
// POST /api/books - store
// PUT /api/books/{id} - update
// DELETE /api/books/{id} - destroy