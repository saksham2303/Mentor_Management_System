import mongoose from 'mongoose';
const mentorSchema = mongoose.Schema({

   
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    }
   
})
export default mongoose.model('mentors', mentorSchema, 'mentor');