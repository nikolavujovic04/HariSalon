<?php

namespace App\Http\Controllers;
use App\Http\Resources\ReservationResource;
use App\Mail\ReservationConfirmed;
use App\Models\HairCut;
use App\Models\Person;
use App\Models\Reservation;
use App\Models\ReservationItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservations = Reservation::with(['person', 'items.haircut'])->whereBetween('reservation_date',[
            now(),
            now()->addDays(7)
        ])
        ->orderBy('reservation_date')
        ->orderBy('reservation_time')
        ->get();
        
        return ReservationResource::collection($reservations);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone_number' => 'required|string',
            'reservation_date' => 'required|date|after:today',
            'reservation_time' => 'required|date_format:H:i',
            'note' => 'nullable|string',
            'haircuts' => 'required|array',
            'haircuts.*' => 'exists:hair_cuts,id'
        ]);

        $exists = Reservation::where('reservation_date', $request->reservation_date)
            ->where('reservation_time', $request->reservation_time)
            ->where('status', '!=', 'cancelled')
            ->exists();

        if($exists){
            return response()->json([
                'message' => 'Termin je zauzet'
            ], 409);
        }

        $person = Person::firstOrCreate(
            ['email' => $request->email],
            [
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'phone_number' => $request->phone_number,
            ]
        );

        $totalPrice = HairCut::whereIn('id', $request->haircuts)->sum('price');

        $reservation = Reservation::create([ 
            'person_id' => $person->id,
            'reservation_date' => $request->reservation_date,
            'reservation_time' => $request->reservation_time,
            'note' => $request->note,
            'total_price' => $totalPrice,
        ]);

        foreach($request->haircuts as $haircutId){
            ReservationItem::create([
                'reservation_id' => $reservation->id,
                'haircut_id' => $haircutId
            ]);
        }

        return new ReservationResource($reservation->load(['person', 'items.haircut']));
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservation $reservation)
    {
        return new ReservationResource($reservation->load(['person','items.haircut']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reservation $reservation)
    {
        $request->validate([
            'status' => 'required|in:confirmed,pending,cancelled',
        ]);
        $reservation->update([
            'status' => $request->status,
        ]);

        if($request->status === 'confirmed'){
            Mail::to($reservation->preson->email)
                ->send(new ReservationConfirmed($reservation->load(['person','items.haircut'])));
        }

        return new ReservationResource($reservation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation)
    {
        $reservation->delete();

        return response()
            ->json([
                'message' => 'Reservation deleted'
            ], 200);
    }
}
