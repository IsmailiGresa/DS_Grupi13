<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\ApiController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
    public function profile(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'user' => $user,
        ]);
    }

    public function update(Request $request)
    {
        $user = auth()->user(); 
        
        $validatedData = $request->validate([
            'first_name' => 'string',
            'last_name' => 'string',
            'email' => 'email',
            'phone_number' => 'string',
            'home_address' => 'string',
            'work_address' => 'string',
            'pronoun' => 'string',
        ]);

        // Update the user's information
        $user->update($validatedData);

        return response()->json(['message' => 'User updated successfully']);
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
