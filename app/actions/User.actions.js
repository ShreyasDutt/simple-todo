"use server"

import { DBConnect } from "@/lib/DBConnect";
import Todo from "@/Models/Todo.model";
import User from "@/Models/User.model";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const addTodo = async(formData) =>{
    try{
        await DBConnect();
        const content = formData.get('content');
        if (!content) return {success:false,message:"Todo was empty"};
        const CurrentUser = await auth();
        const FoundUser = await User.findOne({clerkId:CurrentUser.userId});
        if (!FoundUser) return console.log("User doesn't exist");
        const CreatedTodo = await Todo.create({
                content: content,
                createdBy: FoundUser._id
        })
        FoundUser.Todos.push(CreatedTodo._id);
        await FoundUser.save();
        return {success:true,message:"Todo Created "}

    }catch(err){
        console.log(err);
    }
}

export const getTodos = async() =>{
    try{
        await DBConnect();
        const CurrentUser = await auth();
        const Todos = await User.findOne({clerkId:CurrentUser.userId}).populate('Todos');
        // return console.log(Todos);
        return Todos;
    }catch(err){
        console.log(err)
    }
}

export const CheckTodo = async(todoID) =>{
    try{
        const FoundTodo = await Todo.findById({_id:todoID});
        FoundTodo.done = !(FoundTodo.done);
        await FoundTodo.save();
        revalidatePath('/');
    }catch(err){
        console.log(err);
    }
}

export const DeleteTodo = async(todoID) =>{
    try{
        await Todo.findByIdAndDelete({_id:todoID});
        revalidatePath('/');
        return {success:true,message:"Todo deleted"}
    }catch(err){
        console.log(err);
    }
}