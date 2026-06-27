<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'person_id',
        'reservation_date',
        'reservation_time',
        'status',
        'note',
        'total_price'
    ];

    public function person(){
        return $this->belongsTo(Person::class);
    }

    public function items(){
        return $this->hasMany(ReservationItem::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
