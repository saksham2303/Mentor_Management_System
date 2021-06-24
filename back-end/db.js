

import mongoose from 'mongoose'

const connection_url = "mongodb+srv://admin:PAk7zVZdSNVAUueU@cluster0.1aguq.mongodb.net/registerdata?retryWrites=true&w=majority";
const connectdb = async () =>{
     
        try{
            await mongoose.connect(connection_url,{
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            })
            console.log("database connected")
        }catch(error){

            console.log(error.message)
            
        }

}



mongoose.connect(connection_url,{
    useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
})

export default connectdb;