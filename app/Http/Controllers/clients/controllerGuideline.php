<?php

namespace App\Http\Controllers\clients;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class controllerGuideline extends Controller
{
    public function getGuideline($id){
        if(Session::get('session_guideline_fix_login')){
            return view('frontend.gs',['id'=>$id]);
        }else{
            return redirect()->intended('login');
        }
    }
}
