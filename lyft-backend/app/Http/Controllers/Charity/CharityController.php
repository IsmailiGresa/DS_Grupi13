<?php

namespace App\Http\Controllers\Charity;

use App\Http\Controllers\ApiController;
use App\Models\Charity;
use Illuminate\Http\Request;

class CharityController extends ApiController
{
    /**
     * @OA\Get(
     *     path="/charities",
     *     summary="Get all charities",
     *     tags={"Charity"},
     *     security={{"bearer_token":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Charity")
     *         )
     *     )
     * )
     */
    public function index()
    {
        return $this->showAll(Charity::all());
    }
}
