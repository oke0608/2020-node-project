//JSON
const singer = {
  name: "WINNER",
  members: ["승윤", "민호", "승훈", "진우"],
  songs: [
    {
      title: "REMEMBER",
      year: 2020
    },
    {
      title: "Really Really",
      year: 2017
    }
  ]
};

//Object->string
const str = JSON.stringify(singer);
console.log(str);

//srtinr->object
const obj = JSON.parse(str);
console.log(obj);

console.log(singer.songs[0].title+" "+singer.members[0]);