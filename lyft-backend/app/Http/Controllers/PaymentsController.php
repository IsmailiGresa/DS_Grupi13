<?php

namespace App\Http\Controllers;

use App\Models\PaymentMethods;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payments = PaymentMethods::where('user_id', Auth::id())->get();

        return response()->json($payments);

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
        $cardDetails = PaymentMethods::create([
            'card_number' => $request->cardNumber,
            'name' => $request->fullName,
            'month' => $request->month,
            'year' => $request->year,
            'user_id' => Auth::id() ?? '',
        ]);

        return response()->json($cardDetails);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $p = PaymentMethods::firstWhere('id', $id);

        return response()->json($p);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $p = PaymentMethods::firstWhere('id', $id);

        $selectedPayment = PaymentMethods::where('id', $id)->update([
            'card_number' => $request->cardNumber ?: $p->card_number,
            'name' => $request->fullName ?: $p->name,
            'month' => $request->month ?: $p->month,
            'year' => $request->year ?: $p->year,
            'user_id' => Auth::id() ?? '',
        ]);

        return response()->json($selectedPayment, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $selectedPayment = PaymentMethods::where('id', $id)->delete();
        return response()->json(null, 204);
    }
}
