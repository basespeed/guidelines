<?php

namespace App\Http\Controllers\table;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class controllerCreateProject extends Controller
{
    public function getTable(){
        if(!Schema::hasTable('sk_project')){
            Schema::create('sk_project', function (Blueprint $table){
                $table->bigIncrements('id');
                $table->bigInteger('id_layout');
                $table->bigInteger('id_detail');
                $table->string('list_invite')->nullable();
                $table->string('list_category')->nullable();
                $table->string('name_project');
                $table->string('name_create');
                $table->bigInteger('status');
                $table->string('security');
                $table->timestamps();
            });

            dd('Đã tạo bảng sk_project !');
        }else{
            return view('errors.404');
        }
    }

    public function getTableCategory(){
        if(!Schema::hasTable('sk_menu_guideline')){
            Schema::create('sk_menu_guideline', function (Blueprint $table){
                $table->bigIncrements('id');
                $table->bigInteger('id_project');
                $table->bigInteger('id_detail');
                $table->bigInteger('id_layout');
                $table->string('parent')->nullable();
                $table->string('name');
                $table->string('slug');
                $table->timestamps();
            });

            dd('Đã tạo bảng menu_sk !');
        }else{
            return view('errors.404');
        }
    }

    public function getTableInvite(){
        if(!Schema::hasTable('sk_invite')){
            Schema::create('sk_invite', function (Blueprint $table){
                $table->bigIncrements('id');
                $table->bigInteger('id_project');
                $table->bigInteger('id_detail');
                $table->string('email');
                $table->string('name');
                $table->timestamps();
            });

            dd('Đã tạo bảng sk_invite !');
        }else{
            return view('errors.404');
        }
    }

    public function getTableDetail(){
        if(!Schema::hasTable('sk_detail')){
            Schema::create('sk_detail', function (Blueprint $table){
                $table->bigIncrements('id');
                $table->bigInteger('id_project');
                $table->bigInteger('id_invite');
                $table->bigInteger('id_menu');
                $table->string('title');
                $table->string('desription');
                $table->string('content');
                $table->string('logo1');
                $table->string('title_logo1');
                $table->string('logo2');
                $table->string('title_logo2');
                $table->string('background');
                $table->string('title_list');
                $table->string('content_list');
                $table->string('upload_vector_logo1');
                $table->string('upload_image_logo1');
                $table->string('upload_vector_logo2');
                $table->string('upload_image_logo2');
                $table->string('color_list');
                $table->string('gradient_list');
                $table->string('font1');
                $table->string('font2');
                $table->string('slug');
                $table->timestamps();
            });

            dd('Đã tạo bảng sk_detail !');
        }else{
            return view('errors.404');
        }
    }
}

