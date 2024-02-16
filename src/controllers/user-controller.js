const UserService = require('../services/user-service');
const {StatusCodes} = require('http-status-codes');
const {transporter} = require('./sendMessage')
const userService = new UserService();

const addUsers = async (req,res)=>{
    try{
    const response = await userService.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.phone,
        dob: req.body.dob
    });
    if(response)
    {
        const sendMessage = transporter.sendMail({
            from: 'smithdashdash@gmail.com', 
            to: req.body.email, 
            subject: "You have successfully created a account", 
            text: "Hey", 
            html: `<p>Hello <h2> ${req.body.name} </h2></p>
            <br/> <p>Welcome to storyll </p>
            `, 
          });
    }
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

const getUsers = async (req,res)=>{
    try {
        const response = await userService.get();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully created the user",
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:error.message,
            data:{},
            err:error.explanation
        })
    }
}

module.exports ={
    addUsers,
    getUsers
}