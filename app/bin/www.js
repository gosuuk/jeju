"use strict";

const app = require("../app.js")

// 포트 번호
const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});