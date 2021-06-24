import mongoose from 'mongoose';
const textSchema = mongoose.Schema({

   
    username:{
        type: String,
        
    },
   mentor:{
        type: String,
        
        
    },
   
    text:{
        type: String,
        required:true
        
    },
    like:{
        type: Number,
        
        
    },
    unlike:{
        type: Number,
        
        
    },
    year:{
        type: String
        
        
    }
 
    
   
})
export default mongoose.model('discussions', textSchema,'discuss');