<?php

namespace App\Http\Controllers;

use App\Models\InviteHistory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class InviteHistoryController extends Controller
{
    public function index()
    {
        $inviteHistories = InviteHistory::all();
        return response()->json($inviteHistories, 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'date' => 'required',
            'code' => 'required',
            'applications' => 'required|integer',
            'activations' => 'required|integer',
            'earnings' => 'required|numeric',
            'user_id' => 'required|exists:users,id', // Validoni që user_id ekziston në tabelën users
        ]);

        $inviteHistory = InviteHistory::create($data);

        return response()->json($inviteHistory, 201);
    }

    public function show($id)
    {
        $inviteHistory = InviteHistory::find($id);

        if (!$inviteHistory) {
            return response()->json(['message' => 'Invite history not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($inviteHistory, Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {
        $inviteHistory = InviteHistory::find($id);

        if (!$inviteHistory) {
            return response()->json(['message' => 'Invite history not found'], Response::HTTP_NOT_FOUND);
        }

        $data = $request->validate([
            'date' => 'required',
            'code' => 'required',
            'applications' => 'required|integer',
            'activations' => 'required|integer',
            'earnings' => 'required|numeric',
            'user_id' => 'required|exists:users,id', // Validoni që user_id ekziston në tabelën users
        ]);

        $inviteHistory->update($data);

        return response()->json($inviteHistory, Response::HTTP_OK);
    }

    public function destroy($id)
    {
        $inviteHistory = InviteHistory::find($id);

        if (!$inviteHistory) {
            return response()->json(['message' => 'Invite history not found'], Response::HTTP_NOT_FOUND);
        }

        $inviteHistory->delete();

        return response()->json(['message' => 'Invite history deleted'], Response::HTTP_OK);
    }
}
