<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Predial extends Model
{
    use HasFactory;
}

protected $fillable = [
    'm_p',
    'local_m_p',
    'description',
];