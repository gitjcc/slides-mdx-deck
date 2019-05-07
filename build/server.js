const fs = require('fs');
const cp = require('child_process');

const srcPath = './src/slides';
const srcFileName = process.argv[2]; // 0: node, 1: server.js
const srcFile = `${srcPath}/${srcFileName}.mdx`;

if (srcFileName) {
  if (fs.existsSync(srcFile)) {
    const mdxDeckProcess = cp.exec(`mdx-deck ${srcFile}`);

    mdxDeckProcess.stdout.on('data', function(data) {
      if (data) {
        console.log(`message: ${data}`);
      }
    });

    mdxDeckProcess.stderr.on('data', function(data) {
        console.error('error: ' + data);
    });
  } else {
    console.log('文件名称有误');
  }
} else {
  console.log('请输入文件名称');
}
