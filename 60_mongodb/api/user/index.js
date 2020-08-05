const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.get("/signup", ctrl.showSignupPage);//회원 가입 페이지
router.get("/login", ctrl.showLoginPage);//로그인 페이지
router.get("/logout", ctrl.logout);

router.post("/signup", ctrl.signup);
router.post("/login", ctrl.login);

module.exports = router;