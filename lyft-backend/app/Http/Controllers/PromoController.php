<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Promo;

class PromoController extends Controller
{
    public function create(Request $request)
    {
        $promo = new Promo;
        $promo->code = $request->input('code');
        $promo->discount = $request->input('discount');
        $promo->validity = $request->input('validity');
        $promo->save();

        return response()->json(['message' => 'Promo created successfully'], 201);
    }
}
