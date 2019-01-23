const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const ejs = require('ejs');
const mkdirp = require('mkdirp');

const srcPath = 'src';
const distPath = 'dist';

const fileReg = /(?!.*\\).*\.mdx$/; // 文件名，带后缀
const fileNameReg = /(?!.*\\).*(?=\.mdx$)/; // 文件名，不带后缀

// 遍历 src 文件
const files = fs.readdirSync(srcPath);
const slideNames = files.reduce((acc, file) => {
  const fileFullName = (file.match(fileReg) || [])[0];
  const fileName = (file.match(fileNameReg) || [])[0];

  if (fileFullName && fileName) {
    acc.push(fileName);
    console.log(file, fileFullName, fileName, acc);
    // 构建 slides 文件
    cp.exec(`mdx-deck build ${srcPath}/${fileFullName} -d ${distPath}/${fileName}/`);
  }
  return acc;
}, []);

// 构建主页面
const indexFile = fs.readFileSync(path.join(__dirname, '../src/index.ejs'), 'utf-8');
const data = {
  slideNames
};
const options = {};

const html = ejs.compile(indexFile)(data, options);

const outDir = path.join(__dirname, '../dist');
if (!fs.existsSync(outDir)) mkdirp.sync(outDir);

fs.writeFileSync(`${outDir}/index.html`, html);
