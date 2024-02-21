// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routs/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000 , ()=>{
    console.log("on port 300")
});
// app.use(express.json()); it wi=orks as middleware 
// his line of code configures Express to recognize incoming requests with a JSON payload and parse the JSON data into a JavaScript object.
// when we try to use get and post request it thwows error  it will resolve that error 


//need 2 routes 
// first for /api/v1/user/  thse can be =>/api/v1/user/singup , /api/v1/user/signIn ,/api/v1/user/changePassword
// second for /api/v1/account   these can be => /api/v1/account/balance , /api/v1/account/transferMoney
// in this app.use if any request come it send to rout haveing this substring 
// in our case it is index.js inside backend/routes



