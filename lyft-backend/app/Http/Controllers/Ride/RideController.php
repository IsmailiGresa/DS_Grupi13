<?php

namespace App\Http\Controllers\Ride;

use App\Http\Controllers\ApiController;
use App\Models\PricingBuckets;
use App\Models\Ride;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RideController extends ApiController
{
    /**
     * @OA\Get(
     *     path="/rides",
     *     summary="Get all rides for the authenticated user",
     *     tags={"Ride"},
     *     security={{"bearer_token":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Ride")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     )
     * )
     */
    public function index()
    {
        $rides = Ride::all()->where('user_id', auth()->id());

        return $this->showAll($rides);
    }

    public function calculateRidePrice(Request $request)
    {

        $pricingBuckets = PricingBuckets::where('min_distance', '<=', ((int)$request->distance))
                    ->where('max_distance', '>=', ((int)$request->distance))
                    ->first();

        return response()->json($pricingBuckets);
    }

    public function store(Request $request)
    {
        $ride = Ride::create([
            'ride_length_km' => $request->distance,
            'amount' => $request->amount,
            'pickup_location' => $request->pickup,
            'dropoff_location' => $request->destination,
            'user_id' => Auth::id() ?? null,
            'driver_id' => 1,
        ]);

        return response()->json($ride, 201);
    }
}
