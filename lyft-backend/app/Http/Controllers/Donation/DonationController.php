<?php

namespace App\Http\Controllers\Donation;

use App\Http\Controllers\ApiController;
use App\Http\Requests\StoreDonationRequest;
use App\Http\Requests\UpdateDonationRequest;
use App\Models\Donation;

class DonationController extends ApiController
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDonationRequest $request)
    {
        $data = $request->validated();

        $donation = Donation::where('user_id', auth()->id())->where('charity_id', $data['charity_id'])->first();
        if ($donation !== null) {
            return $this->showError('You can only donate to one charity at a time', 422);
        }

        Donation::create([
            'user_id' => auth()->id(),
            'charity_id' => $data['charity_id'],
            'amount' => $data['amount'],
        ]);

        return $this->showMessage('Donation successful!');

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDonationRequest $request)
    {
        $data = $request->validated();

        $user = auth()->user();

        $user->donation()->update([
            'amount' => $data['amount'],
        ]);

        $user->save();

        return $this->showMessage('Donated amount updated successfully!');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        $donation = Donation::where('user_id', auth()->id())->firstOrFail();

        $donation->delete();

        return $this->showMessage('Donation stopped succesfully!');

    }
}
