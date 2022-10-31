<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultModel extends Model
{
    use HasFactory;
    protected $table = 'result';
    protected $fillable = [
        'id',
        'user_id',
        'alpha',
        'beta',
        'gamma',
        'model',
        'nilai_mape',
        'iterasi',
    ];
    public function tampilData()
    {
    }
}
