import express from 'express';
const router = express.Router();
import {arrayofvalues} from './subactions.js'
import chatSchema from './chatCard.js';
import { check, validationResult } from 'express-validator';
import alert from 'alert';


router.get("/chats",   async (req,res) => {
    
    try{
        const datanames = req.query.mentor
        const dataname = req.query.mentee
        console.log("name is",dataname);
        const usertype = req.query.usertype
        
        if(usertype=="Mentor"){
            const data = await chatSchema.find(
                {
                    $or:[
                      {$and:[{"mentor":dataname},{"mentee":datanames}]},
                      {$and:[{"mentor":datanames},{"mentee":dataname}]}
                    ]
                
                })
                res.json(data)
    }
    else{
       
        const data = await chatSchema.find(
            {
                $or:[
                  {$and:[{"mentor":dataname},{"mentee":datanames}]},
                  {$and:[{"mentor":datanames},{"mentee":dataname}]}
                ]
            
            })
            res.json(data)
    }
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})





router.post("/chats", 
[
    check('texts','Invalid text').not().isEmpty(),
    
    

], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){

       return res.status(400).json({errors: errors.array()})
    }
    
    
    const mentor = req.body.mentors;
    
    const text = req.body.texts;
    const mentee = req.body.mentees;
    
    const chatSchemaa = new chatSchema({
        mentee,
        mentor,
        text
        
    })
    chatSchemaa.save()
        
})


export default router;