import express from 'express';
const router = express.Router();
import {arrayofvalues} from './subactions.js'
import annSchema from './annCard.js';
import { check, validationResult } from 'express-validator';
import alert from 'alert';


router.get("/texts",   async (req,res) => {
    try{
        
        const data = await annSchema.find()
   
        
        
        res.json(data)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})





router.post("/texts", 
[
    check('text','Invalid text').not().isEmpty(),
    
    

], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){

       return res.status(400).json({errors: errors.array()})
    }
    
    
    const username = req.body.username;
    
    const text = req.body.text;
    const year = req.body.year;
    
    const annSchemaa = new annSchema({
        username,
       
        text,
        year
    })
    annSchemaa.save()
        
})


export default router;