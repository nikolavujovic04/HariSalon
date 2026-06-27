<?php

namespace App\Http\Controllers;

use App\Http\Resources\HairCutResource;
use App\Models\HairCut;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HairCutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $haircuts = HairCut::all();
        return new HairCutResource($haircuts);
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
        $validator = Validator::make($request->all(),[
            'type' => 'required|string',
            'price' => 'required|numeric|min:0',
            'duration' => 'required|integer|min:20',
        ]);

        if($validator->fails()){
            return response()->json(
                ['message', 'Failed to create new haircut'], 402
            );
        }

        $haircut = HairCut::create($request->only(['type', 'price', 'duration']));
        
        return new HairCutResource($haircut);
    }

    /**
     * Display the specified resource.
     */
    public function show(HairCut $hairCut)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HairCut $hairCut)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HairCut $hairCut)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HairCut $hairCut)
    {
        //
    }
}
