const router = require("express").Router();
const {createUser,authenticateUser,refresh,logout} = require("../controller/userController");

router.post("/login",authenticateUser);
router.post("/signup",createUser);
router.get("/refresh",refresh);

module.exports = router;
