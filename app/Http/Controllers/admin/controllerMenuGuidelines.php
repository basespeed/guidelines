<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class controllerMenuGuidelines extends Controller
{
    public function postMenuGuidelines(Request $request){
        $menu_id = DB::table('sk_menu_guideline')->insertGetId(
            array(
                'id_project' => $request->get_id,
                'id_detail' => '123',
                'id_layout' => $request->get_layout,
                'parent' => $request->get_menu_parent,
                'name' => $request->get_menu_name,
                'slug' => 'abc',
                'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),
            )
        );

        return view('backend.createMenuGuidelines',['menu_id'=>$menu_id]);
    }
}
