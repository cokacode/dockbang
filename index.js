import express from "express"
import {join} from "path"

const app = express();
app.use(express.static(join(process.cwd, "static")))

app.listen(8000, ()=>{
    console.log("Listining at port 8000");
})