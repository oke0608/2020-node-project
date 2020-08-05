const mongoose = require("mongoose")
//스키마 정의

const GoSchema = new mongoose.Schema({
  cafe: {
    type: String,
    trim: true,
    required: true
  },
  memo: {
    type: String,
    required: false
  },
  fin: {
    type: Boolean,
    required: true,
    default: true
  }
});

// 모델 생성
// model(모델명, 스키마) -> 모델명s 컬렉션에 작업함
const GO = mongoose.model("go", GoSchema);
module.exports = GO;