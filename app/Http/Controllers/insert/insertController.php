<?php

namespace App\Http\Controllers\insert;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class insertController extends Controller
{
    public function postInsertGuidelinesDetails(Request $request){
        //Kiểm tra file
        if ($request->hasFile('upload_logo_menu')) {
            $file_upload_logo_menu = $request->upload_logo_menu;
            //Lấy Tên files
            $file_upload_logo_menu_name = uniqid().'_'.$file_upload_logo_menu->getClientOriginalName();
            //Lấy Đuôi File
            //$file->getClientOriginalExtension();
            //Lấy đường dẫn tạm thời của file
            //$file->getRealPath();
            //Lấy kích cỡ của file đơn vị tính theo bytes
            //$file->getSize();
            //Lấy kiểu file
            //$file->getMimeType();

            $path = public_path('/images/'.date("Y"));

            if(!File::isDirectory($path)){
                File::makeDirectory($path, 0777, true, true);
            }

            //move images
            $file_upload_logo_menu->move($path, $file_upload_logo_menu_name);

            $id_project = $request->id_project;
            $name_project = $request->name_project;
            $cate_project = $request->cate_project;
            $cate_project = $request->cate_project;
            $checkbox_project = $request->checkbox_project;

            $detail_id = DB::table('sk_detail')->insertGetId(
                array(
                    'id_project' => $id_project,
                    'title' => $name_project,
                    'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),
                )
            );

            $update = DB::table('sk_project')->where('id', $id_project)->update(['image' => $file_upload_logo_menu_name]);

            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Logo','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Ý nghĩa logo','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Tỷ lệ đồ họa','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Màu sắc','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Màu hạn chế','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Dải màu hỗ trợ','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Font chữ sử dụng','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Không gian trống tối thiểu','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Các dạng thức sử dụng logo','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Kích thước logo tối thiểu','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Thi công dạng nổi, dạng chìm','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Đặt trên nền ảnh','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Trường hợp tránh sử dụng','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));
            $insert_default = DB::table('sk_menu_guideline')->insertGetId(array('name' => 'Phối cảnh logo','parent'=>'Logo guidelines','id_detail' => $detail_id,'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),));


        }
    }
}
