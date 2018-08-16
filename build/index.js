const fs = require('fs');
const cp = require('child_process');

files = fs.readdirSync('src')

files.map((file)=> {
  const fileReg = /(?!.*\\).*\.mdx/g; // 文件名，带后缀
  const fileNameReg = /(?!.*\\).*(?=\.mdx)/g; // 文件名，不带后缀
  const fileFullName = file.match(fileReg)[0];
  const fileName = file.match(fileNameReg)[0];
  // 构建文件
  cp.exec(`mdx-deck build src/${fileFullName} -d dist/${fileName}/`);
});
