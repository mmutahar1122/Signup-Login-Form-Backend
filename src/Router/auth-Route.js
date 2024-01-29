const express = require("express")
const router = express.Router();
const AuthController = require("../Controller/auth-route-controller");
const signupValidate = require("../Validations/SignupValidation");
const signupValidatemiddleware = require("../middlewares/Signup-middleware")

// router.use()
// ******** two way to define Route  *********
// ******* first way to define Route *********
// router.get('/', (req, res) => {
//     res.json("sampleData");
//   });


//   ******* Second way to define Route *********

router.route("/").get(AuthController.SignUp);

router.route('/signup').post(signupValidatemiddleware(signupValidate), AuthController.SignupUsers);

router.route('/login').post(AuthController.Login)

module.exports = router;