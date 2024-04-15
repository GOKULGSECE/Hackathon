const signUpService = require('../services/userservice');

 exports.register = async(req,res) =>{
    try{
        const {username,email,password,phoneno,city} = req.body;
       
        const success= await signUpService.userRegistration(username,email,password,phoneno,city);
       
      
        res.send(success);
        
    }catch(err){
       res.json({status:false,message:"Email id is already taken"});
    }
}
