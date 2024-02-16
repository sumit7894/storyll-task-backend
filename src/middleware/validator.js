const validatePhone =(req,res,next)=>{
    const phoneNumber = req.body.phone;
    const phoneRegex = /^[0-9]{10}$/;
    if(!phoneNumber || !phoneRegex.test(phoneNumber)){
        return res.status(400).json({
            success:false,
            data:{},
            message:"Invalid phone number",
            err:'Invalid phone number'
        })
    }
    next();
}
module.exports = validatePhone;