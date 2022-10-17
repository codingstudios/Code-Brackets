const fs = require('fs');
const drawings = fs.readdirSync('./').filter(file => file.endsWith('.png'));
var creations = {};
var html = ``;

drawings.forEach((e) => {
  const fileName = e.slice(0, -4);
  const name = fileName.split("@")[0];
  const author = fileName.split("@")[1];
  if(!name || !author)return;
  if(Array.isArray(creations[`${author}`])) {
    creations[`${author}`] = creations[`${author}`].push(e);
  }else {
    creations[`${author}`] = [e];
  }
})

for(i in creations){
  html += `<a href="https://github.com/${i}">${i}</a>`
  creations[i].forEach((e) => {
    html += `<img src="./${e}">`
  })
}
 
fs.writeFileSync("./index.html", html);
