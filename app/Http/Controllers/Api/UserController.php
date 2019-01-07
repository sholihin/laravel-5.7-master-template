<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;

class UserController extends Controller
{
    public function index(){
        $user = User::all();
        if($user){
            return response()->json($user, 200);
        }else{
            return response()->json(['Data is Empty..'], 200);
        }
    }

    public function show($id){
        $user = User::find($id);
        if($user){
            return response($user, 200);
        }else{
            return response()->json(['message'=>'Failed save..!!'], 400);
        }
    }

    public function store(Request $request){
        $user = User::create($request->all());
        if($user){
            return response()->json(['message'=>'Create success'], 201);
        }else{
            return response()->json(['message'=>'Save failed..!!'], 400);
        }
    }

    public function update(Request $request, $id)
    {   
        $user = User::find($id);
        if($user){
            $user->update($request->all());
            return response()->json(['message'=>'Update success'], 200);
        }else{
            return response()->json(['message'=>'Update failed..!!'], 400);
        }
    }

    public function delete($id)
    {
        $user = User::find($id);
        if($user){
            $user->delete();
            return response()->json(['message'=> 'Delete success'], 204);
        }else{
            return response()->json(['message'=>'Delete failed..!!'], 400);
        }
    }
}
