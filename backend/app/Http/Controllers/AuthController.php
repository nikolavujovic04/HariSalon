<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if(!Auth::attempt($request->only('email','password'))){
            return response()
            ->json(
                ['message' => 'Unauthorized'],401);
        }

        $user = User::where('email',$request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json([
                'message' => 'Hi '. $user->name.', Welcome back',
                'access_token'=> $token,
                'token_type' => 'Bearer'
            ]);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();

        return response()
            ->json([
                'message' => 'Logged out successfully'
            ]);
    }
}
