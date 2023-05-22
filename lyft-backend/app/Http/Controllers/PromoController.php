<?php

namespace App\Http\Controllers;

use App\Models\Promo;
use Illuminate\Http\Request;

class PromoController extends ApiController
{
    public function store(Request $request)
    {
        $validated_data = $request->validate(
            ['code' => 'required|string|max:255', 'discount' => 'required|numeric', 'validity' => 'required|date'],
            $request->all()
        );
        $promo = Promo::create($validated_data);

        return $this->showOne($promo);
    }

    public function update(Request $request, Promo $promo)
    {
        $validated_data = $request->validate(
            ['code' => 'string|max:255', 'discount' => 'numeric', 'validity' => 'date'],
            $request->all()
        );
        $promo->update($validated_data);

        $promo->save();

        return $this->showOne($promo);
    }

    public function destroy(Promo $promo)
    {
        $promo->delete();

        return $this->showMessage('Promo deleted successfully!');
    }
}
