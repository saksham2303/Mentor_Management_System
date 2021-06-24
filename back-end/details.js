import express from 'express';
const router = express.Router();
import {arrayofvalues} from './subactions.js'
import detailSchema from './detailSchema.js';
import { check, validationResult } from 'express-validator';
import alert from 'alert';


router.get("/details",   async (req,res) => {
    
    try{
        const names = req.query.name;
        const year = req.query.year;
        console.log(names, year)
        const data = await detailSchema.find({$and:[{"mentor":names},{"year":year}]}).sort({"$natural": -1}).limit(5)
        
        
        
        
        res.json(data)
        
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})





router.post("/details", 
async (req,res) => {
    
    
    const problem = req.body.problem;
    const problemtype = req.body.type;
    const upvotes = req.body.agree;
    
    const attendance = req.body.attendance;
    
    const Strength = req.body.strength;
    const problemsolved = req.body.solved;
    const branch = req.body.branch;
    const year = req.body.year;
    const noofproblems = req.body.noproblems
    const noofsolutions = req.body.nosolutions
    const mentor = req.body.mentor
    const chatSchemaa = new detailSchema({
        problem,
        problemtype,
        upvotes,
        problemsolved,
        attendance,
        Strength,
        noofproblems,
        noofsolutions,
        branch,
        year,
        mentor
        
    })
    chatSchemaa.save()
        
})


export default router;