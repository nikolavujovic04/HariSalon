<h1>Pozdrav {{ $reservation->person->first_name }}!</h1>
<p>Vaša rezervacija je potvrđena.</p>
<p>Datum: {{ $reservation->reservation_date }}</p>
<p>Vreme: {{ $reservation->reservation_time }}</p>
<p>Usluge: 
    @foreach($reservation->items as $item)
        {{ $item->haircut->type }}
    @endforeach
</p>
<p>Ukupno: {{ $reservation->total_price }} RSD</p>