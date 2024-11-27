const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const { authenticated, users } = require('./router/auth_users.js');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req,res,next){
    if(authenticatedUser(username,password)){

          let accesstoken =jwt.sign({
              data:password
          }, 'access' {60*60});
        let(req.session.authorization)={accesstoken,username}
        
        return  res.status(200).send('success login')
         
        }else {
           return  res.status(208).json({message:'invalid logins'})
        }
    
    
    

    }
);
 
const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT,()=>console.log("Server is running"));
