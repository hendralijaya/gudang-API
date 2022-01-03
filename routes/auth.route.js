const { signin, signup, logout } = require("../controllers/auth.controller");
const { validation } = require("../middlewares/validation.middleware");
const { signinSchema, signupSchema } = require("../validation/user.validation");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken.middleware");
const router = require("express").Router();

router.post("/signup", validation(signupSchema), signup);
router.post("/signin", validation(signinSchema), signin);
router.post("/logout", verifyTokenAndAuthorization, logout);

module.exports = router;
