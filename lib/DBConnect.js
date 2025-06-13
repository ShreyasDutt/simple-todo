import mongoose from "mongoose";

let connected = false;
let DB_URI = process.env.DB_URI;

export const DBConnect = async() =>{
    if(!DB_URI) return console.log("DB URI Missing");
    if (connected) return console.log("DB already connected")
        try {
            await mongoose.connect(DB_URI,{dbName:'NextjsTodoApp'});
            connected = true;
            console.log("DB connected")
        } catch (error) {
            console.log(error.message);
        }
}