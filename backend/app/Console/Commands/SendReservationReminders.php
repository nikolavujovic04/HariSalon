<?php

namespace App\Console\Commands;

use App\Mail\ReservationReminder;
use App\Models\Reservation;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendReservationReminders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reservations:reminders';
    

    /**
     * The console command description.
     *
     * @var string
     */

    protected $description = 'Posalji podsetnik dan pre rezervacije';
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $reservations = Reservation::with(['person', 'items.haircut'])
            ->whereDate('reservation_date',now()->addDay())
            ->where('status', 'confirmed')
            ->get();

        foreach($reservations as $reservation){
            Mail::to($reservation->person->email)
                ->send(new ReservationReminder($reservation));
        }

        $this->info("Poslato {$reservations->count()} podsetnka");
    }
}
