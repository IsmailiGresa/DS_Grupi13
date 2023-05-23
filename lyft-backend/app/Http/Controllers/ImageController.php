<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller{
    public function uploadImage(Request $request){
        if($request -> hasFile('image')){
            $request -> validate(['image' => 'image']);
            $file = $request -> file('image');
            $filename = $file -> getClientOriginalName();
            $finalName = date('His').$filename;
            $request -> file('image') -> storeAs('images/', $finalName, 'public');
            return response() -> json(["message" => "Image uploaded successfully!"]);
        }else{
            return response() -> json(["message" => "Select image first!"], 422);
        }
        
        
    }
}