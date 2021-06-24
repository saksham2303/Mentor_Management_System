import mongoose from 'mongoose';
const annSchema = mongoose.Schema({

   
    username:{
        type: String,
        
    },
   
    text:{
        type: String,
        required:true
        
    },
    year:{
        type: String
        
        
    }
 
    
   
})
export default mongoose.model('announcements', annSchema,'announcement');