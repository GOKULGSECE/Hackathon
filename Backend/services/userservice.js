const userModel = require('../models/usermodel');

class userService {
    static async userRegistration(username, email, password,phoneno,city) {
        try {
            
            if (!username || !email ||  !phoneno || !city) {
                
               return false;
            }

        
            const emailRegex = /@./;
            if (!emailRegex.test(email)) {
                
                return false;
            }

            if (password.length < 6) {
                return false;
            }

           
            const existingUser = await userModel.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
               
                return false;
            }

        
            const createUser = new userModel({ username, email, password,phoneno,city });

  
            await createUser.save();
            
            return true;
           
        } catch (err) {
            console.error("Error during user registration:", err.message);
           
        }}
    }
    module.exports = userService;