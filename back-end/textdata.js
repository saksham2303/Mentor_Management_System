import express from 'express';
const router = express.Router();
import {arrayofvalues} from './subactions.js'
import textSchema from './textCard.js';
import { check, validationResult } from 'express-validator';
import alert from 'alert';
import mongoose from 'mongoose'
mongoose.set('useFindAndModify', false);

router.get("/text",   async (req,res) => {
    const names = req.query.name
    const mentors = req.query.mentor
    const years = req.query.year
    const usertype = req.query.utype
    console.log(names,mentors,years)
   if(usertype=="Mentee") {
       
    try{
       
        const data = await textSchema.find(
            
            
            
            
           {
               
        $and: [ {$or: [{"username":mentors},{"mentor":mentors}]}, {"year":years}]}
        
        
        
        )
        
        
        
        res.json(data)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
}
else{

    try{
       
        const data = await textSchema.find(
            
            
            
            
           {
               
        $and: [ {$or: [{"username":names},{"mentor":names}]}, {"year":years}]}
        
        
        
        )
        
        
        
        res.json(data)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }

}
})
router.get("/text/notification",   async (req,res) => {
    const names = req.query.name;
    const mentorn = req.query.mname;
    const usertype = req.query.utype;
   
   if(usertype=="Mentee") {
       
    try{
       
        const data = await textSchema.find(
            
            
            
            
           {
               
         $or: [{"username":mentorn},{"mentor":mentorn}]
        
           }
        
        ).sort({"$natural":-1}).limit(3)
        
        
        
        res.json(data)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
}
else{

    try{
       
        const data = await textSchema.find(
            
            
            
            
           {
               
      $or: [{"username":names},{"mentor":names}]}
        
        
        
        ).sort({"$natural":-1}).limit(3)
        
        
        
        res.json(data)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }

}
})

router.post("/text/update",   async (req,res) => {
    try{
        const ids = req.query.id
        const l = req.query.vote
        if(l=="like")
       {
        const data = await textSchema.findByIdAndUpdate({"_id":ids})
        
        data.like = data.like + 1
        data.save()
    }
    else if(l=="unlike"){
        const data = await textSchema.findByIdAndUpdate({"_id":ids})
        
        data.unlike = data.unlike + 1
        data.save()
    }
        
    
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})



router.post("/text", 
[
    check('text','Invalid text').not().isEmpty(),
    
    

], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){

       return res.status(400).json({errors: errors.array()})
    }
    
    
    const username = req.body.username;
    const mentor = req.body.mentor;
    const text = req.body.text;
    const like = 0;
    const unlike = 0;
    const year = req.body.year;
    
    const textSchemaa = new textSchema({
        username,
       mentor,
        text,
        like,
        unlike,
        year
    })
    textSchemaa.save()
        
})


export default router;