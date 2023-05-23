<?php

namespace App\Http\Controllers;

use App\Models\GiftCardHistory;
use App\Models\Purchase;
use App\Models\Redemption;
use Illuminate\Http\Request;

class GiftCardHistoryController extends Controller
{
    public function index()
    {
        $giftCardHistory = GiftCardHistory::with('purchases', 'redemptions')->get();
        return response()->json($giftCardHistory);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $requestData = $request->validate([
            'purchases' => 'required|array',
            'redemptions' => 'required|array',
            'purchases.*.purchase_details' => 'required|string|max:255', // Maximum length of 255 characters for purchase details
            'redemptions.*.redemption_details' => 'required|string|max:255', // Maximum length of 255 characters for redemption details
        ]);

        try {
            // Create a new gift card history entry
            $giftCardHistory = GiftCardHistory::create();

            // Store the purchases
            foreach ($requestData['purchases'] as $purchase) {
                Purchase::create([
                    'gift_card_history_id' => $giftCardHistory->id,
                    'purchase_details' => $purchase['purchase_details'],
                ]);
            }

            // Store the redemptions
            foreach ($requestData['redemptions'] as $redemption) {
                Redemption::create([
                    'gift_card_history_id' => $giftCardHistory->id,
                    'redemption_details' => $redemption['redemption_details'],
                ]);
            }

            return response()->json(['message' => 'Gift card history created successfully']);
        } catch (\Exception $e) {
            // Handle any exceptions
            return response()->json(['error' => 'An error occurred during gift card history creation'], 500);
        }
    }
}
