const UserService = require('../services/user-service');
const {StatusCodes} = require('http-status-codes')
const userService = new UserService();

const addUsers = async (req,res)=>{
    try{
    const response = await userService.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.phone,
        dob: req.body.dob
    });
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"Successfully created the user",
        data:response,
        err:{}
    })
}   catch(error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:error.message,
        data:{},
        err:error.explanation
    })}
}

module.exports ={
    addUsers
}