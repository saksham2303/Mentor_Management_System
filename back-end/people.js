import express from 'express';
const routerr = express.Router()


routerr.get("/receive", (req,res) =>{
    res.send("Show all participants")
})


routerr.post("/", (req,res) =>{
    res.send("Save participants")
})


routerr.put("/", (req,res) =>{
    res.send("Edit participants")
})

routerr.delete("/", (req,res) =>{
    res.send("delete participants")
})


export default routerr;