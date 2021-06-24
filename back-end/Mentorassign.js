import express from 'express';
const router = express.Router();
import {arrayofvalues} from './subactions.js'
import assignedmentor from './assignmentor.js';
import { check, validationResult } from 'express-validator';
import alert from 'alert';


router.get("/assign",async (req,res) => {
    try{
        
        const user = await assignedmentor.find()
        
        
        res.json(user)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})
router.get("/assign/get",async (req,res) => {
    try{
        email = req.query.ema
        const user = await assignedmentor.find({"$email":email})
        
        
        res.json(user)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})





router.post("/assign", 
[
    check('username','Invalid username').not().isEmpty(),
    
    check('email', 'Please enter valid email').isEmail(),
    check('rollnumber', 'Please enter valid rollnumber').not().isEmpty(),
    check('years', 'Please enter valid year').not().isEmpty(),
    check('branches', 'Please enter valid branch').not().isEmpty(),
    
    

], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){

       return res.status(400).json({errors: errors.array()})
    }
    
    
    const username = req.body.username;
    const email = req.body.email;
    const rollnumber = req.body.rollnumber;
    const years = req.body.years;
    const branches = req.body.branches;
    const mentor = req.body.mentor;
    const assignedmentors = new assignedmentor({
        username,
        email,
        rollnumber,
        years,
        branches,
        mentor
        
    })
    assignedmentors.save()
        
})


export default router;