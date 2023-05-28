<?php

namespace App\Http\Controllers\Ride;

use App\Http\Controllers\ApiController;
use App\Models\PricingBuckets;
use App\Models\Ride;
use Illuminate\Http\Request;

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
}
