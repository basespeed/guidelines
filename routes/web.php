<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','controllerBase@getBase');

Route::group(['namespace'=>'admin'],function(){
   //login
   Route::group(['prefix'=>'login'],function(){
      Route::get('/','controllerLogin@getLogin');
      Route::post('/','controllerLogin@postLogin');
   });

   //logout
    Route::get('/logout', 'controllerLogout@getLogout');

   //list project
   Route::group(['prefix'=>'admin'],function(){
       Route::get('/','controllerAdmin@getAdmin');
       Route::post('/','controllerAdmin@postAjaxSearchProject');
   });

   Route::get('guidelines/edit/{id}','controllerEditGuidelines@getEditGuidelines');

   //create guidelines
   Route::group(['prefix'=>'new'],function (){
       Route::post('/guidelines','controllerNewGuidelines@postNewGuidelines');
   });


   //edit guidelines
   Route::group(['prefix'=>'edit'],function (){
       Route::get('/guidelines/{id}','controllerNewGuidelines@getEditGuidelines');
   });

   //create menu guidelines
   Route::group(['prefix'=>'create'],function (){
       Route::post('/menu','controllerMenuGuidelines@postMenuGuidelines');
   });

});

//view guidelines
Route::group(['namespace'=>'clients'],function (){
    Route::group(['prefix'=>'guidelines'],function (){
        Route::get('/{id}','controllerGuideline@getGuideline');
    });
});

//create table
Route::group(['namespace'=>'table'],function(){
    Route::group(['prefix'=>'create'],function(){
        Route::get('/project_sk','controllerCreateProject@getTable');
        Route::get('/menu_sk','controllerCreateProject@getTableCategory');
        Route::get('/detail_sk','controllerCreateProject@getTableDetail');
        Route::get('/invite_sk','controllerCreateProject@getTableInvite');
    });
});


Route::any('/{page?}',function(){
    return View::make('errors.404');
})->where('page','.*');




