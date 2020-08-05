const mongoose = require("mongoose")
//스키마 정의(사용자 정보)
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 50
  },
  id: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

// 모델 생성
// model(모델명, 스키마) -> 모델명s 컬렉션에 작업함
//model(모델명, 스키마, 컬렉션명)
const User = mongoose.model("user", UserSchema);
module.exports = User;