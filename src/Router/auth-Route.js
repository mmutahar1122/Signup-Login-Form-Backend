const express = require("express")
const router = express.Router();
const AuthController = require("../Controller/auth-route-controller")

// router.use()
// ******** two way to define Route  *********
// ******* first way to define Route*********
// router.get('/', (req, res) => {
//     res.json("sampleData");
//   });


//   ******* Second way to define Route*********

  router.route("/").get( AuthController.SignUp );

  router.route('/postData').post(AuthController.PostData);
  
  router.route('/login').post(AuthController.Login)

    module.exports = router ;