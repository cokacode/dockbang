import express from "express"
import {join, dirname} from "path"
import { fileURLToPath } from 'url';


const app = express();
app.use(express.static(join( dirname(fileURLToPath(import.meta.url)), "static")))

app.listen(8000, ()=>{
    console.log("Listining at port 8000");
})