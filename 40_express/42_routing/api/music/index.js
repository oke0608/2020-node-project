const express = require("express");
const router = express.Router();
const ctrl = require("./music.ctrl");

router.get("/", ctrl.list);//목록조회
router.get("/:id", ctrl.detail)//상세조회
router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;