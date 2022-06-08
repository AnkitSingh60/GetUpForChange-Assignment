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