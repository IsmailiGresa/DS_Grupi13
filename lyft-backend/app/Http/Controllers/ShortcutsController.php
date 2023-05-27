<?php

namespace App\Http\Controllers;

use App\Shortcuts;
use Illuminate\Http\Request;

class ShortcutsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'home_location' => 'required',
            'work_location' => 'required',
        ]);

        $shortcut = Shortcuts::create($request->all());

        return response()->json($shortcut, 201);
    }

    public function index()
    {
        $shortcuts = Shortcuts::all();

        return response()->json($shortcuts);
    }
}
