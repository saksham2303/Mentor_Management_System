import express from 'express'
import newNote from './noteRoute.js'
import newNoteLogin from './noteRouteit.js'
import connectdb from './db.js'
import Cors from 'cors'
import mongoose from 'mongoose'
import filterdata from './filterdata.js'
import addinfo from './menteedetails.js'
import textCard from './textCard.js'
import textinfo from './textdata.js'
import chatinfo from './chatdata.js'
import anninfo from './anndata.js'
import mentor from './Mentorassign.js'
import meetings from './details.js'
const app = express();
const port = process.env.PORT || 6001;


connectdb()





app.use(express.json({extended: false}));

app.use(Cors());

app.use("/receive/register", newNote);
// app.get("/", (req,res) => res.status(200).send("Saksham World"));
app.use("/receive/getdata", newNoteLogin);
app.use("/addinfo", addinfo)
app.use("/textinfo", textinfo)
app.use("/textinfos", anninfo)
app.use("/texts", chatinfo)
app.use("/assigned",mentor)
app.use("/meetings",meetings)





app.listen(port, () => console.log(`listening to ${port}`));