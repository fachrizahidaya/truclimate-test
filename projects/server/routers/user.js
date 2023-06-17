const router = require("express").Router();
const { user } = require("../controllers");
const { verifyToken } = require("../middleware/verification");

router.post("/", user.register);
router.post("/login", user.login);
router.get("/", user.keepLogin);

module.exports = router;
