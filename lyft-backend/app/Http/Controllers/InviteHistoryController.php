<?php

namespace App\Http\Controllers;

use App\Models\InviteHistory;
use Illuminate\Http\Request;

class InviteHistoryController extends Controller
{
    public function index()
    {
        $inviteHistory = InviteHistory::all();
        return response()->json($inviteHistory, 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'date' => 'required',
            'code' => 'required',
            'applications' => 'required|integer',
            'activations' => 'required|integer',
            'earnings' => 'required|numeric',
        ]);

        $inviteHistory = InviteHistory::create($data);

        return response()->json($inviteHistory, 201);
    }

    public function show($id)
    {
        $inviteHistory = InviteHistory::find($id);

        if (!$inviteHistory) {
            return response()->json(['message' => 'Invite history not found'], 404);
        }

        return response()->json($inviteHistory, 200);
    }

    public function update(Request $request, $id)
    {
        $inviteHistory = InviteHistory::find($id);

        if (!$inviteHistory) {
            return response()->json(['message' => 'Invite history not found'], 404);
        }

        $data = $request->validate([
            'date' => 'required',
            'code' => 'required',
            'applications' => 'required|integer',
            'activations' => 'required|integer',
            'earnings' => 'required|numeric',
        ]);

        $inviteHistory->update($data);

        return response()->json($inviteHistory, 200);
    }

    public function destroy($id)
    {
        $inviteHistory = InviteHistory::find($id);

        if (!$inviteHistory) {
            return response()->json(['message' => 'Invite history not found'], 404);
        }

        $inviteHistory->delete();

        return response()->json(['message' => 'Invite history deleted'], 200);
    }
}
