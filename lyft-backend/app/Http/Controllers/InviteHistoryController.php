<?php

namespace App\Http\Controllers;

use App\Models\InviteHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InviteHistoryController extends Controller
{
    public function store(Request $request)
    {
        $inviteHistory = new InviteHistory();
        $inviteHistory->code = $request->input('code');
        $inviteHistory->user_id = Auth::id() ?? '';
        $inviteHistory->save();

        return response()->json([
            'message' => 'Invite history saved successfully.',
        ]);
    }

    public function index()
    {
        $inviteHistories = InviteHistory::where('user_id', Auth::id())->get();

        return response()->json($inviteHistories);
    }

    public function update(Request $request, $id)
    {
        $inviteHistory = InviteHistory::findOrFail($id);
        $inviteHistory->code = $request->input('code');
        $inviteHistory->date = $request->input('date');
        $inviteHistory->applications = $request->input('applications');
        $inviteHistory->activations = $request->input('activations');
        $inviteHistory->earnings = $request->input('earnings');
        $inviteHistory->save();

        return response()->json([
            'message' => 'Invite history updated successfully.',
        ]);
    }

    public function destroy($id)
    {
        $inviteHistory = InviteHistory::findOrFail($id);
        $inviteHistory->delete();

        return response()->json([
            'message' => 'Invite history deleted successfully.',
        ]);
    }
}
