//비구조화 할당
const { Router } = require("express");
const router = Router();

router.use("/user", require("./user"));
router.use("/go", require("./go"));
module.exports = router;
