const router = require("express").Router();
const { user } = require("../controllers");
const { verifyToken } = require("../middleware/verification");

router.post("/", user.register);
router.post("/login", user.login);
router.post("/tweet/:id", user.tweet);
router.patch("/follow/:idUser/:idAccount", user.follows);
router.patch("/unfollow/:idUser/:idAccount", user.unfollow);
router.get("/list", user.tweetList)
router.get("/", user.keepLogin);

module.exports = router;
