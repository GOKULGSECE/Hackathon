const express=require("express");
const cors=require('cors');
const bodyparser=require('body-parser')
const router=require('./router/commonrouter');
const port = process.env.port || 3000;


const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use('/',router);




app.listen(port,()=>{
    console.log(`app listening at port http://localhost:${port}`);
});

module.exports=app;
