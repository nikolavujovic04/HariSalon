<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id' => $this->id,
            'reservation_date' => $this->reservation_date,
            'reservation_time' => $this->reservation_time,
            'status' => $this->status,
            'note' => $this->note,
            'person' => new PersonResource($this->person),
            'items' => ReservationItemResource::collection($this->items),
        ];
    }
}
