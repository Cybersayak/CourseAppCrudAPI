import mongoose from "mongoose";
import app from "./app.js"

( async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/demo")
        console.log("DB connected ");

        const onListening = () => {
            console.log("Listening to port 5000");
        }

        app.listen(5000, onListening)
    } catch (error) {
        console.log("error :" , error);
        throw error ;
    }
}) ()