let nextId = 4;
//데이터
let music = [
  { id: 1, singer: "WINNER", title: "REMEMBER" },
  { id: 2, singer: "레드벨벳", title: "Psycho" },
  { id: 3, singer: "f(x)", title: "피노키오" }
];

//목록조회(localhost:3000/api/music?limit=1)
//성공: limit수만큼 music 객체를 담은 배열 리턴(200:OK)
//실패: limit가 숫자형이 아닌 경우(400:Bad Request)
const list = (req, res) => {
  let limit = req.query.limit || 10;
  limit = parseInt(limit, 10);

  if (Number.isNaN(limit))
    return res.status(400).end();
  
  res.json(music.slice(0, limit));
  res.end();
};

//상세조회
//성공: id에 해당하는 music 객체 리턴(200:OK)
//실패: id가 숫자가 아닌 경우(400:Bad Request)
//해당하는 id가 없는 경우(404: Not Found)
const detail = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  
  const result = music.filter((m) => m.id === id);
  if (!result) return res.status(404).end();
  
  res.json(result);
}

//등록
//-성공: id는 채번하고, 입력받은 singer, title로 새로운 객체를 만들어서 배열에 추가(201: Created)
//-실패: singer, title 값이 없는 경우(400: Bad Request)
const create = (req, res) => {
  const { singer, title } = req.body;
  if (!singer || !title) return res.status(400).end();

  const m = { id: nextId++, singer, title };
  music.push(m);
  res.status(201).json(m);
}

//수정(localhost:3000/api/music/:id)
//-성공: id에 해당하는 객체에 입력값으로 업데이트하고 객체 반환(201)
//-실패: id가 숫자가 아닐 경우(400: Bad Request), 해당되는 id가 없을 경우(404: Not Found)
const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const result = music.find(m => m.id = id);
  if (!result) return res.status(404).end();

  const { singer, title } = req.body;
  if (singer) result.singer = singer;
  if (title) result.title = title;
  res.json(result); 
}

//삭제수정(localhost:3000/api/music/:id)
//-성공: id에 해당하는 객체를 배열에서 삭제 후 배열 리턴(200: OK)
//-실패: id가 숫자가 아닌 경우 (400: Bad Request), 해당하는 id가 없는 경우(404: Not Found)
const remove = (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) res.status(400).end();

  const result = music.find((m) => m.id === id);
  if (!result) res.status(404).end();
  music = music.filter(m => m.id !== id);
  res.json(music);
}

module.exports = { list, detail, create, update, remove };