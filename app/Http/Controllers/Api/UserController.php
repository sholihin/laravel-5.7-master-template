<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;

class UserController extends Controller
{
    public function index(){
        return response(User::all(),200);
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
            return response()->json(['message'=> 'Failed save..!!'], 400);
        }
    }

    public function update(Request $request, $id)
    {   
        $user = User::find($id);
        if($user){
            $user->update($request->all());
            return response()->json(['message'=>'Update success'], 200);
        }else{
            return response()->json(['message'=>'Failed update..!!'], 400);
        }
    }

    public function delete($id)
    {
        try {
            $user = User::find($id);

            if(isset($user)){
                $user->delete();
                return response(null, 204);
            }else{
                return response()->json(['Bad Request'], 400);
            }
        }
        catch (Exception $e) {
            return response()->json([$e->getMessage()]);
        }
    }
}
