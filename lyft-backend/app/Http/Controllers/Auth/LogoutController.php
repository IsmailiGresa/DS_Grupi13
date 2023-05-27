<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\API\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Token;
//use Laravel\Passport\RefreshToken;
use Laravel\Passport\Bridge\RefreshToken;

class LogoutController extends Controller
{
    public function logout()
    {
        $user = Auth::user();
        $user->token()->revoke();

// If you want to log out from all devices:
        $tokens = $user->tokens->pluck('id');
        Token::whereIn('id', $tokens)->update(['revoked' => true]);
        RefreshToken::whereIn('access_token_id', $tokens)->update(['revoked' => true]);

        return 'logged out'; // Modify the response as per your needs
    }

}
