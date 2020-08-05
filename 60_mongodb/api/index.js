//비구조화 할당
const { Router } = require("express");
const router = Router();

router.use("/music", require("./music"));
router.use("/movie", require("./movie"));
router.use("/user", require("./user"));

module.exports = router;
