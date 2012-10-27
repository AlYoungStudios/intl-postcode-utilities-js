//Though this is run on node.js, it uses synchronous file requests because it will max out most OS limits to load over 40000 concurrent requests
var fs = require('fs'),
    codes = fs.readFileSync('./src.csv','utf8'),
    codeRow,
    dir,
    lookup = {};
codes=codes.split(/\n/);
fs.writeFileSync('./allcodes.js','var codes = {'+"\n");
for (var i in codes) {
  if (i > 0 && codes[i].trim()!="") {
    codeRow = codes[i].split(',');
    fs.appendFileSync('./allcodes.js', '  "z'+codeRow[0].replace('"','')+':{c:'+codeRow[2]+',s:'+codeRow[3]+',d:'+codeRow[8].trim('"')+'},'+"\n");
  }
}
fs.appendFileSync('./allcodes.js','};'+"\n"+'module.exports = codes;');
//After allcodes.js is assembled
codes = require('./allcodes.js');
//Cleanout current data
console.log('Begin clearout of old data');
for (var x = 0;x<10;x++) {
  for (var y = 0;y<10;y++) {
    dir = fs.readdirSync('./'+x+'/'+y);
    for (var z in dir) {
      fs.unlinkSync('./'+x+'/'+y+'/'+dir[z]);
    }
  }
}
console.log('Completed removal of old data');
//Add new data from ./allcodes.js
console.log('Starting new data from ./allcodes.js');
for (var x = 0;x<100000;x++) {
  var y = x;
  y = y.toString();
  if (y.length < 5) {
    y = Array(6 - y.length).join('0') + y;
  }
  if (codes["z"+y]==undefined) {
    codes["z"+y] = false;
  }
}
for (var i in codes) {
  lookup["1"] = i.substring(1,2);
  lookup["2"] = i.substring(2,3);
  lookup["3"] = i.substring(3,4);
  codeRow = codes[i];
  if (codeRow.c!=undefined) {
    fs.appendFileSync('./'+lookup["1"]+'/'+lookup["2"]+'/'+lookup["3"]+'.json', '"'+i+'":{"c":"'+codeRow.c+'","s":"'+codeRow.s+'","d":'+codeRow.d+'},');
  }
  else {
    fs.appendFileSync('./'+lookup["1"]+'/'+lookup["2"]+'/'+lookup["3"]+'.json', '"'+i+'":false,');
  }
}
console.log('Grooming JSON Data');
for (var x = 0;x<10;x++) {
  for (var y = 0;y<10;y++) {
    dir = fs.readdirSync('./'+x+'/'+y);
    for (var z in dir) {
      var output = fs.readFileSync('./'+x+'/'+y+'/'+dir[z],'utf8');
      fs.writeFileSync('./'+x+'/'+y+'/'+dir[z],'{'+output.substring(0,output.length - 1)+'}');
    }
  }
}
console.log('Completed');