import mongoose from 'mongoose';
const Mongo_Url = "mongodb+srv://root:root@cluster0.oa7zlra.mongodb.net/?retryWrites=true&w=majority";


const Connection = () =>{

    mongoose.connect(Mongo_Url).then(() =>{
        console.log("DB Connected")
    }).catch(function(error){
        console.log("Connection error :", error)
    })
    
    }

    export default Connection;



