const User = require("../model/user.model")

const register = async (req,res) => {
    try {
         // first find the user
         let user = await User.findOne({email: req.body.email}).lean().exec();

          // if user is found then give error
        if(user) 
        return res.status(400).send({Message:"Please another email"})

        // if user is not found thn create user with data provided
        user = await User.create(req.body);

        res.send(user)

    } catch (error) {
        console.log('error:', error)
    }
}

const login = async (req,res) => {
    try {
        // we will try to find the user with the email provided
        const user = await User.findOne({email: req.body.email})

        // if user is not found then return error
        if(!user) return res.send({Message: "Either the email or the password you entered is not correct"})

        // if user is found then  we will match the password
        const match = user.checkPassword(req.body.password) 

        if(!match) return res.status(400).send({Message: "Either the email or the password you entered is not correct"}) 

        res.send(user)
    } catch (error) {
        console.log('error:', error)
    }
}

module.exports ={register,login}