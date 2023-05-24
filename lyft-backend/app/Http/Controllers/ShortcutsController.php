<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shortcuts;

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
