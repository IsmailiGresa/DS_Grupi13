<?php

namespace App\Http\Controllers\Donation;

use App\Http\Controllers\ApiController;
use App\Http\Requests\StoreDonationRequest;
use App\Http\Requests\UpdateDonationRequest;
use App\Models\Donation;
use App\Models\User;

class DonationController extends ApiController
{
    /**
     * @OA\Get(
     *     path="/is-donating",
     *     summary="Check if user is donating",
     *     tags={"Donation"},
     *
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *
     *         @OA\JsonContent(
     *
     *             @OA\Property(property="is_donating", type="boolean")
     *         )
     *     )
     * )
     */
    public function is_donating()
    {
        $is_donating = Donation::where('user_id', auth()->id())->exists();

        return $this->showMessage($is_donating);
    }

    /**
     * @OA\Post(
     *     path="/donations",
     *     summary="Store a new donation",
     *     tags={"Donation"},
     *     security={{"bearer_token":{}}},
     *
     *     @OA\RequestBody(
     *         required=true,
     *
     *         @OA\JsonContent(ref="#/components/schemas/StoreDonationRequest")
     *     ),
     *
     *     @OA\Response(
     *         response=200,
     *         description="Donation successful",
     *
     *         @OA\JsonContent(
     *
     *             @OA\Property(property="message", type="string")
     *         )
     *     ),
     *
     *     @OA\Response(
     *         response=422,
     *         description="Unprocessable Entity"
     *     )
     * )
     */
    public function store(StoreDonationRequest $request)
    {
        $data = $request->validated();
        $donation = Donation::where('user_id', auth()->id())->first();
        if ($donation !== null) {
            return $this->showError('You can only donate to one charity at a time', 422);
        }
        $data['amount'] = null;
        if ($request->has('amount')) {
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
     * @OA\Put(
     *     path="/donations",
     *     summary="Update the donated amount",
     *     tags={"Donation"},
     *
     *     @OA\RequestBody(
     *         required=true,
     *
     *         @OA\JsonContent(ref="#/components/schemas/UpdateDonationRequest")
     *     ),
     *
     *     @OA\Response(
     *         response=200,
     *         description="Donated amount updated successfully",
     *
     *         @OA\JsonContent(
     *
     *             @OA\Property(property="message", type="string")
     *         )
     *     ),
     *
     *     @OA\Response(
     *         response=422,
     *         description="Unprocessable Entity"
     *     )
     * )
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
     * @OA\Delete(
     *     path="/donations",
     *     summary="Stop the donation",
     *     tags={"Donation"},
     *
     *     @OA\Response(
     *         response=200,
     *         description="Donation stopped successfully",
     *
     *         @OA\JsonContent(
     *
     *             @OA\Property(property="message", type="string")
     *         )
     *     ),
     *
     *     @OA\Response(
     *         response=404,
     *         description="Not Found"
     *     )
     * )
     */
    public function destroy()
    {
        $donation = Donation::where('user_id', auth()->id())->firstOrFail();

        $donation->delete();

        return $this->showMessage('Donation stopped succesfully!');

    }
}
