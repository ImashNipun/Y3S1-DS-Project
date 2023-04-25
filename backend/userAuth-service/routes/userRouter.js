const router = require("express").Router();
const {createUser,authenticateUser} = require("../controller/userController");

router.post("/login",authenticateUser);
router.post("/signup",createUser);

module.exports = router;
