const GoModel = require("../../models/go");
const mongoose = require("mongoose");

const checkId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();
  next();
}
//목록조회(localhost:3000/api/go?limit=1)
const listA = (req, res) => {
  let limit = req.query.limit || 10;
  limit = parseInt(limit, 10);

  if (Number.isNaN(limit)) return res.status(400).end();
  
  GoModel.find((err, result) => {
    if (err) return res.status(500).end();//next(err);//throw err;
    //res.json(result);
    res.render("go/listA", { result });
  }).limit(limit).sort({ _id: -1 });
};

const listB = (req, res) => {
  let limit = req.query.limit || 10;
  limit = parseInt(limit, 10);

  if (Number.isNaN(limit)) return res.status(400).end();
  
  GoModel.find((err, result) => {
    if (err) return res.status(500).end();//next(err);//throw err;
    //res.json(result);
    res.render("go/listB", { result });
  }).limit(limit).sort({ _id: -1 });
};


//상세조회
//성공: id에 해당하는 go 객체 리턴(200:OK)
//실패: id가 숫자가 아닌 경우(400:Bad Request)
//해당하는 id가 없는 경우(404: Not Found)
const detail = (req, res) => {
  const id = req.params.id;
  GoModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.render("go/detail", { result });
  });
}

//등록
//-성공: id는 채번하고, 입력받은 name, location로 새로운 객체를 만들어서 배열에 추가(201: Created)
//-실패: name, location 값이 없는 경우(400: Bad Request)
const create = (req, res) => {
  const { cafe, memo, fin} = req.body;
  if (!cafe || !memo) return res.status(400).send("입력값 오류입니다.");
 
  //2. GoModel.create()
  GoModel.create({ cafe, memo, fin }, (err, result) => {
    if (err) res.status(500).send("등록 시 오류가 발생했습니다.");
    res.status(201).json(result);
  })
}

//수정(localhost:3000/api/go/:id)
//-성공: id에 해당하는 객체에 입력값으로 업데이트하고 객체 반환(201)
//-실패: id가 숫자가 아닐 경우(400: Bad Request), 해당되는 id가 없을 경우(404: Not Found)
const update = (req, res) => {
  const id = req.params.id;
  const { cafe, fin, memo } = req.body;
  GoModel.findByIdAndUpdate(id, { cafe, fin, memo }, { new: true }, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end()
    res.json(result);
  })
};

//삭제수정(localhost:3000/api/go/:id)
//-성공: id에 해당하는 객체를 배열에서 삭제 후 배열 리턴(200: OK)
//-실패: id가 숫자가 아닌 경우 (400: Bad Request), 해당하는 id가 없는 경우(404: Not Found)
const remove = (req, res) => {
  const id = req.params.id;
  GoModel.findByIdAndDelete(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.json(result);
  })
}

const showCreatePage = (req, res) => {
  res.render("go/create");
}

const showUpdatePage = (req, res) => {
  const id = req.params.id;
  GoModel.findById(id, (err, result) => {
    if (err) return res.status(500).send("조회 시 오류가 발생했습니다");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다");
    res.render("go/update", { result });
  })
}
const fin = (req, res) => {
  const id = req.params.id;
  const fin = req.body.fin;
  GoModel.findByIdAndUpdate(id, { fin }, { new: true }, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end()
    res.json(result);
  })
}


module.exports = { listA, listB, detail, create, update, remove, checkId, showCreatePage, showUpdatePage,fin};