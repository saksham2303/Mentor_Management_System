import mongoose from 'mongoose';
const chatSchema = mongoose.Schema({

   
    mentee:{
        type: String,
        
        
    },
   
    mentor:{
        type: String,
        
        
    },
    text:{
        type: String
        
        
    }
 
    
   
})
export default mongoose.model('chatboxes', chatSchema,'chatbox');