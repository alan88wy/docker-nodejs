const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

exports.signUp = async (req, res, next) => {

    const { username, password } = req.body
    
    try {
        const hashPassword = await bcrypt.hash(password, 12)

        const newUser = await User.create({
            username,
            password: hashPassword
        })

    
        res.status(201).json({
            status: 'Success',
            data: {
                user: newUser,
            }
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            status: "fail",
        })
    }
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body

    if ( !password ) {
        res.status(404).json({
            status: 'fail',
            message: 'No password given'
        })
    }

    try {
        const hashPassword = await bcrypt.hash(password, 12)
        const user = await User.findOne({
            username,
        })
        
        if ( !user ) {
            res.status(404).json({
                status: 'fail',
                message: 'User not found'
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if ( passwordMatch ) {
            // req.session.user = user

            res.status(200).json({
                status: 'Success',
            })
        } else {
            res.status(400).json({
                status: 'fail',
                message: "Incorrect username of password entered",
            })
        }
    } catch (e) {
        console.log(e)
        res.status(400).json({
            status: "fail",
        })
    }
}



