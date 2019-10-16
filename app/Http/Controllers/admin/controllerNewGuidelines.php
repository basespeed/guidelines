<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Carbon;

class controllerNewGuidelines extends Controller
{
    public function getEditGuidelines($id){
        return view('backend.editGuidelines',['id'=>$id]);
    }

    public function postNewGuidelines(Request $request){
        $projects_search = DB::table('sk_project')->Where('name_project', 'like', '%' . $request->get_invite_user_slt_project . '%')->count();
        if($projects_search < 1){
            $project_id = DB::table('sk_project')->insertGetId(
                array(
                    'id_layout' => 1,
                    'id_detail' => 1,
                    'list_invite' => $request->get_invite_user_slt_user,
                    'list_category' => $request->get_invite_user_slt_cate,
                    'name_project' => $request->get_invite_user_slt_project,
                    'name_create' => Session::get('session_guideline_username'),
                    'status' => 1,
                    'security' => 0,
                    'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),
                )
            );

            return view('backend.newGuidelines',['id'=>$project_id]);
        }else{
            return redirect()->intended('admin')->with([
                'errors' => 'Project đã tồn tại !',
            ]);
        }
    }
}
