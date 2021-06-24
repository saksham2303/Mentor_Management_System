import mongoose from 'mongoose';
const detailSchema = mongoose.Schema({

   
    problem:{
        type: String,
        
    },
    problemtype:{
        type: String,
        
    },
   
    upvotes:{
        type: Number
        
        
    },
    attendance:{
        type: Number
        
        
    },

    Strength:{
        type: Number
        
        
    },
    noofproblems:{
        type: Number
        
        
    },
    noofsolutions:{
        type: Number
        
        
    },
    problemsolved:{
        type: String
    }
    , 
    branch:{
        type: String
    }
 , 
 year:{
    type: String
 },
 mentor:{
    type: String
 }
    
   
})
export default mongoose.model('meeting', detailSchema,'Meetings');