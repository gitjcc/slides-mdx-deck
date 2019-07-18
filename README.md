# slides-mdx-deck

## mdx-deck 基本命令

```bash
# start the dev server
mdx-deck [path-to-file]

# build static HTML page with JS bundle
mdx-deck build [path-to-file] -d [dest-folder]

# Export PDF
mdx-deck pdf [path-to-file] --out-file [dest-path-to-file]
```

## start the dev server with NPM scripts

```bash
# NPM scripts
"scripts": {
  "start": "mdx-deck [path-to-file]",
}

# start the dev server
npm start
```

## build slides width mdx-deck

```bash
# NPM scripts
"scripts": {
  "build": "mdx-deck build [path-to-file] -d [dest-folder]",
}
```

## deploy to netlify

```
# 同时在 Netlify 上配置相应的构建命令、目标文件夹等。

# 构建命令
npm run build

# 目标文件夹
[dest-folder]
```
