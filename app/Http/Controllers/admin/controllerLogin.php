<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class controllerLogin extends Controller
{
    public function getLogin(){
        if(Session::forget('session_guideline_fix_login')){
            return redirect()->intended('admin');
        }else{
            return view('backend.login');
        }
    }

    public function postLogin(Request $request){
        $users = DB::table('dm_user')->get();
        $email = $request->email;
        $password = md5($request->password);

        if(!empty($email) && !empty($password)){
            $success = true;
            foreach ($users as $user){
                if($user->email == $email && $user->password == $password){
                    $success = true;
                    break;
                }else{
                    $success = false;
                }
            }
            if ($success == true) {
                Session::put('session_guideline_fix_login', 'succes');
                $users = DB::table('dm_user')->Where('email', $email)->get();
                foreach ($users as $user){
                    Session::put('session_guideline_username', $user->username);
                }
                return redirect()->intended('admin');
            }
            else {
                return redirect()->intended('login');
            }
        }else{
            $error = 'Tài khoản mật khẩu sai !';
            return view('backend.login', compact('error'));
        }
    }
}
