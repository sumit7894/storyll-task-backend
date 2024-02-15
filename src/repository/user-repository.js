const User = require('../models/user');
class UserRepository{
    async create(data){
        try {
            const user= await User.create(data);
            return user;
        } catch (error) {
            console.log("Somthing went wrong in the repo layer");
            throw error;
        }
    }
    async get(emailId){
        try {
            const user = await User.findOne({email:emailId});
            return user;
        } catch (error) {
            console.log("Somthing went wrong in the repo layer");
            throw error;
        }
    }
}
module.exports = UserRepository;