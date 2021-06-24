import express from 'express';
const router = express.Router();
import {arrayofvalues} from './subactions.js'
import menteedCard from './menteeCard.js';
import { check, validationResult } from 'express-validator';
import alert from 'alert';


router.get("/search",   async (req,res) => {
    try{
        
        const data = await menteedCard.find(
            {
                $or: 
                [
                    {rollnumber:arrayofvalues[arrayofvalues.length-1]
                    
                    
                    },
            {$and:
                 [{"year":arrayofvalues[arrayofvalues.length - 3]}, {"branch":arrayofvalues[arrayofvalues.length - 2]}
                ]}
            ]})
   
        const userdata = data
        console.log("roll",arrayofvalues[arrayofvalues.length-1]);
        res.json(userdata)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})


router.post("/search", async (req,res) => {
      
    const filyear = req.body.year;
    const filbranch = req.body.branch;
    const filrollnumber = req.body.rollnumbers;
    arrayofvalues.push(filyear);
    arrayofvalues.push(filbranch);
    arrayofvalues.push(filrollnumber);
    
    
    // if(findquery){
    //     res.status(200).send(findquery)
    //     console.log(findquery)
    // }
    

    
        
})



router.post("/", 
[
    check('username','Invalid username').not().isEmpty(),
    
    check('email', 'Please enter valid email').isEmail(),
    check('rollnumber', 'Please enter valid rollnumber').not().isEmpty(),
    check('year', 'Please enter valid year').not().isEmpty(),
    check('branch', 'Please enter valid branch').not().isEmpty(),
    

], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){

       return res.status(400).json({errors: errors.array()})
    }
    
    
    const username = req.body.username;
    const email = req.body.email;
    const rollnumber = req.body.rollnumber;
    const year = req.body.year;
    const branch = req.body.branch;
    const menteeCard = new menteedCard({
        username,
        email,
        rollnumber,
        year,
        branch
    })
    menteeCard.save()
        
})


export default router;