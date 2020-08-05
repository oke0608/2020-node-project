const express = require("express");
const router = express.Router();
const ctrl = require("./music.ctrl");

router.get("/", ctrl.list);//목록조회
router.get("/new", ctrl.showCreatePage);//등록 페이지 보여주기
router.get("/:id", ctrl.checkId, ctrl.detail)//상세조회
router.get("/:id/edit", ctrl.checkId, ctrl.showUpdatePage);//수정 페이지 보여주기

router.post("/", ctrl.create);//등록
router.put("/:id", ctrl.checkId, ctrl.update);
router.delete("/:id", ctrl.checkId, ctrl.remove);


module.exports = router;