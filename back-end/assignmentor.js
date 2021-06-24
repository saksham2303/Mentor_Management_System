import mongoose from 'mongoose';
const mentorSign = mongoose.Schema({

   
    username:{
        type: String
        
    },
    email:{
        type: String
        
        
    },
    rollnumber:{
        type: String
        
       
    },
    years:{
        type: String
        
        
    },
    branches:{
        type: String
        
    },
    mentor:{
        type: String
    }
    
   
})
export default mongoose.model('assignedmentor', mentorSign,'assignedmentors');