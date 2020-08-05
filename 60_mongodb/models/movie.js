const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
  director: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  year: {
    type: String,
    trim: true,
    required: true
  },
  created: {
    type: Date,
    default: Date.now,

  }
});

// 모델 생성
// model(모델명, 스키마) -> 모델명s 컬렉션에 작업함
const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;