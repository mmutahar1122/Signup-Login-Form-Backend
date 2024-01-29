const SignupUser = require("../models/signupusers.modesl");
const bcrypt = require("bcryptjs")

const SignUp = async (req, res) => {
    try {
        res.status(200).send("sampleData");
    } catch (error) {
        console.log('SignUp error', error);
        res.status(500).send('An error occurred');
    }
}

const SignupUsers = async (req, res) => {

    try {

        // console.log("--PostData--", req.body)
        const { fname, lname, email, password } = req.body
        const userExist = await SignupUser.findOne({ email });
        // console.log("--userExist--", userExist)

        if (userExist) {

            return res.status(400).json("email already exist");
        }
        const saltRound = 10;

        const password_hash = await bcrypt.hash(password, saltRound);

        // console.log("--password_hash--", password_hash);


        const data = await SignupUser.create({ fname, lname, email, password: password_hash })
        // console.log("--data--", data);

        return res.status(200).json({ data, token: await data.generateToken(), userId: data._id })

    } catch (error) {

        res.status(500).json("internal server error");
    }

    res.json({
        message: "Data received successfully",
    });
};

const Login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const userExist = await SignupUser.findOne({ email });
        console.log('userExist', userExist);

        if (!userExist) {
            return res.status(401).send("Invalid Crediantial");
        }
        const isValidPassword = await bcrypt.compare(password, userExist.password);
        console.log('isValidPassword', isValidPassword)

        if (isValidPassword) {

            res.status(200).send("Login succeful");

        } else {
            res.status(401).send("invalid email or password");
        }
    } catch (error) {
        console.log(error);

    }
}




module.exports = { SignUp, SignupUsers, Login };
