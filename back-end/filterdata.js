import express from 'express';
const router = express.Router();

import menteedCard from './menteeCard.js';


router.get("/search",   async (req,res) => {
    try{
       
    console.log(filyear)
    
    var findquery = await menteedCard.find({$and: [{"year":filyear}, {"branch":filbranch}]});
   
        const userdata = findquery
        
        res.json(userdata)
        console.log(userdata)
            
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})

router.post("/", async (req,res) => {
    
    const filyear = req.body.year;
    const filbranch = req.body.branch;
    
    var findquery = await menteedCard.find({$and: [{"year":filyear}, {"branch":filbranch}]});
    if(findquery){
        res.status(200).send(findquery)
        console.log(findquery)
    }

    
        
})





export default router;