<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dataset extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'user_id',
        'nof',
        'tmp',
        'tp',
        'aio',
        'iostd',
        'exec',
    ];
}
