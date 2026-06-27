<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function earnings(Request $request){
        $request->validate([
            'from' => 'required|date',
            'to' => 'required|date|after:from'
        ]);

        $total = Reservation::whereBetween('reservation_date',[
            $request->from,
            $request->to
        ])->where('status','cofirmed')
            ->sum('total_price');

        return response()->json([
            'from' => $request->from,
            'to' => $request->to,
            'total_earnings' => $total,
        ]);
    }

    
}
