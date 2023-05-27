<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\ApiController;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends ApiController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();

        return $this->showAll($users);
    }
    public function uploadAvatar(Request $request){

        /** @var User $user */
        $user = auth()->user();

        $request->validate([
            'image' => 'required|image|max:2048',
        ]);

        $path = $request->file('image')->store('public/images');
        $url = Storage::url($path);

        $user->avatar = $path;
        $user->save();

        return response()->json(['message' => 'Image uploaded successfully', 'path' => $url]);
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
