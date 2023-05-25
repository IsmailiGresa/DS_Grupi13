<?php

namespace App\Http\Controllers\Donation;

use App\Models\Donation;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\ApiController;
use App\Http\Requests\StoreDonationRequest;
use App\Http\Requests\UpdateDonationRequest;
use App\Models\User;

class DonationController extends ApiController
{

    public function is_donating(){
        $is_donating = Donation::where('user_id', auth()->id())->exists();
        return $this->showMessage($is_donating);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDonationRequest $request)
    {
        $data = $request->validated();
        $donation = Donation::where('user_id', auth()->id())->first();
        if ($donation !== null) {
            return $this->showError('You can only donate to one charity at a time', 422);
        }
        $data['amount'] = null;
        if($request->has('amount')){
            $data['amount'] = $request->amount;
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

        /** @var User $user */
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
