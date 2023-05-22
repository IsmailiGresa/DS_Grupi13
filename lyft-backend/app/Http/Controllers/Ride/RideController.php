<?php

namespace App\Http\Controllers\Ride;

use App\Http\Controllers\ApiController;
use App\Models\Ride;
use Illuminate\Http\Request;

class RideController extends ApiController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rides = Ride::all()->where('user_id', auth()->id());

        return $this->showAll($rides);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
