<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenumpangKeretaModel extends Model
{
    use HasFactory;
    protected $table = 'dataset';
    protected $primaryKey = 'Id';
    protected $fillable = [
        'Id',
        'Bulan',
        'Index_bulan',
        'Tahun',
        'Jumlah_penumpang',
        'user_id',
    ];
    public function tampilData()
    {
    }
}
