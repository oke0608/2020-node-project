const MovieModel = require("../../models/movie");
const mongoose = require("mongoose");

const checkId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();
  next();
}
//목록조회(localhost:3000/api/movie?limit=1)
const list = (req, res) => {
  let limit = req.query.limit || 10;
  limit = parseInt(limit, 10);

  if (Number.isNaN(limit)) return res.status(400).end();
  
  MovieModel.find((err, result) => {
    if (err) return res.status(500).end();//next(err);//throw err;
    //res.json(result);
    res.render("movie/list", { result });
  }).limit(limit).sort({ _id: -1 });
};

//상세조회
//성공: id에 해당하는 movie 객체 리턴(200:OK)
//실패: id가 숫자가 아닌 경우(400:Bad Request)
//해당하는 id가 없는 경우(404: Not Found)
const detail = (req, res) => {
  const id = req.params.id;
  MovieModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.render("movie/detail", { result });
  });
}

//등록
//-성공: id는 채번하고, 입력받은 director, title, year로 새로운 객체를 만들어서 배열에 추가(201: Created)
//-실패: director, title, year 값이 없는 경우(400: Bad Request)
const create = (req, res) => {
  const { director, title, year } = req.body;
  if (!director || !title || !year) return res.status(400).send("입력값 오류입니다.");
 
  //2. MovieModel.create()
  MovieModel.create({ director, title, year }, (err, result) => {
    if (err) res.status(500).send("등록 시 오류가 발생했습니다.");
    res.status(201).json(result);
  })
}

//수정(localhost:3000/api/movie/:id)
//-성공: id에 해당하는 객체에 입력값으로 업데이트하고 객체 반환(201)
//-실패: id가 숫자가 아닐 경우(400: Bad Request), 해당되는 id가 없을 경우(404: Not Found)
const update = (req, res) => {
  const id = req.params.id;
  const { director, title, year } = req.body;
  MovieModel.findByIdAndUpdate(id, { director, title, year }, { new: true }, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end()
    res.json(result);
  })
};

//삭제수정(localhost:3000/api/movie/:id)
//-성공: id에 해당하는 객체를 배열에서 삭제 후 배열 리턴(200: OK)
//-실패: id가 숫자가 아닌 경우 (400: Bad Request), 해당하는 id가 없는 경우(404: Not Found)
const remove = (req, res) => {
  const id = req.params.id;
  MovieModel.findByIdAndDelete(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.json(result);
  })
}

const showCreatePage = (req, res) => {
  res.render("movie/create");
}

const showUpdatePage = (req, res) => {
  const id = req.params.id;
  MovieModel.findById(id, (err, result) => {
    if (err) return res.status(500).send("조회 시 오류가 발생했습니다");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다");
    res.render("movie/update", { result });
  })
}
module.exports = { list, detail, create, update, remove, checkId, showCreatePage, showUpdatePage };