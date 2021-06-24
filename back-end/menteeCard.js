import mongoose from 'mongoose';
const menteeSchema = mongoose.Schema({

   
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
        
    },
    rollnumber:{
        type: String,
        required: true
       
    },
    year:{
        type: String
        
        
    },
    branch:{
        type: String,
        
    }
    
   
})
export default mongoose.model('mentees', menteeSchema,'mentee');