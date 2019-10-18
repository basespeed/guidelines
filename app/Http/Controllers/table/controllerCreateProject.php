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
                $table->bigInteger('id_layout')->nullable();
                $table->bigInteger('id_detail')->nullable();
                $table->string('list_invite')->nullable();
                $table->string('list_category')->nullable();
                $table->string('name_project')->nullable();
                $table->string('name_create')->nullable();
                $table->string('image')->nullable();
                $table->bigInteger('status')->nullable();
                $table->string('security')->nullable();
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
                $table->bigInteger('id_project')->nullable();
                $table->bigInteger('id_detail')->nullable();
                $table->bigInteger('id_layout')->nullable();
                $table->string('parent')->nullable();
                $table->string('name')->nullable();
                $table->string('slug')->nullable();
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
                $table->bigInteger('id_project')->nullable();
                $table->bigInteger('id_detail')->nullable();
                $table->string('email')->nullable();
                $table->string('name')->nullable();
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
                $table->bigInteger('id_project')->nullable();
                $table->bigInteger('id_invite')->nullable();
                $table->bigInteger('id_menu')->nullable();
                $table->string('title')->nullable();
                $table->string('desription')->nullable();
                $table->string('content')->nullable();
                $table->string('logo1')->nullable();
                $table->string('title_logo1')->nullable();
                $table->string('logo2')->nullable();
                $table->string('title_logo2')->nullable();
                $table->string('logo3')->nullable();
                $table->string('title_logo3')->nullable();
                $table->string('logo4')->nullable();
                $table->string('title_logo4')->nullable();
                $table->string('background')->nullable();
                $table->string('title_list')->nullable();
                $table->string('content_list')->nullable();
                $table->string('upload_vector_logo1')->nullable();
                $table->string('upload_image_logo1')->nullable();
                $table->string('upload_vector_logo2')->nullable();
                $table->string('upload_image_logo3')->nullable();
                $table->string('upload_vector_logo3')->nullable();
                $table->string('upload_image_logo4')->nullable();
                $table->string('upload_vector_logo4')->nullable();
                $table->string('upload_image_logo2')->nullable();
                $table->string('color_list')->nullable();
                $table->string('gradient_list')->nullable();
                $table->string('font1')->nullable();
                $table->string('font2')->nullable();
                $table->string('font3')->nullable();
                $table->string('slug')->nullable();
                $table->timestamps();
            });

            dd('Đã tạo bảng sk_detail !');
        }else{
            return view('errors.404');
        }
    }

    public function getTableColor(){
        if(!Schema::hasTable('sk_color')){
            Schema::create('sk_color', function (Blueprint $table){
                $table->bigIncrements('id');
                $table->bigInteger('id_project')->nullable();
                $table->bigInteger('id_detail')->nullable();
                $table->string('hex')->nullable();
                $table->string('rgb')->nullable();
                $table->string('cmyk')->nullable();
                $table->timestamps();
            });

            dd('Đã tạo bảng sk_color !');
        }else{
            return view('errors.404');
        }
    }
}

