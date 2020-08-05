const express = require("express");
const router = express.Router();
const ctrl = require("./go.ctrl");

router.get("/", ctrl.listA);//목록조회A
router.get("/B", ctrl.listB);
router.get("/new", ctrl.showCreatePage);//등록 페이지 보여주기
router.get("/:id", ctrl.checkId, ctrl.detail);//상세조회
router.get("/:id/edit", ctrl.checkId, ctrl.showUpdatePage);//수정 페이지 보여주기

router.post("/", ctrl.create);
router.put("/:id", ctrl.checkId, ctrl.update);
router.put("/:id/fin", ctrl.checkId, ctrl.fin);
router.delete("/:id", ctrl.checkId, ctrl.remove);

module.exports = router;