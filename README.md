### 建立專案
`mkdir demo-node`
### 初始化 package.json 檔案
`npm init -y`
### 產生 .npmrc 檔案
`echo 'loglevel=silent' > .npmrc`
### 安裝 TypeScript 必備的 npm 套件
`npm install typescript @types/node tslint nodemon ts-node --save-dev`
### 初始化 tsconfig.json 設定檔
`npx typescript --init`
### 初始化 tslint.json 設定檔
`npx tslint --init`
### 初始化 .editorconfig 編輯器設定檔
`npx node-editorconfig`

### 參考文章
[The Will Will Web - 如何快速建置一個 Node.js 專案並使用 TypeScript 與 VSCode 進行開發](https://blog.miniasp.com/post/2021/07/18/Build-Nodejs-Dev-Env-with-TypeScript-Nodemon-and-VSCode)

### Node Package Manager

#### Framework

[Express](https://www.npmjs.com/package/express)

`npm install express --save`

`npm install @types/express --save-dev`

[Koa](https://www.npmjs.com/package/koa)

`npm install koa --save`

`npm install @types/koa --save-dev`

`npm install koa-logger --save`

`npm install @types/koa-logger --save-dev`

`npm install koa-router --save`

`npm install @types/koa-router --save-dev`

`npm install koa-bodyparser --save`

`npm install @types/koa-bodyparser --save-dev`

`npm install koa-views --save`

`npm install @types/koa-views --save-dev`

#### 模版引擎

[pug](https://www.npmjs.com/package/pug)

`npm install pug --save`

`npm install @types/pug --save-dev`

[ejs](https://www.npmjs.com/package/ejs)

`npm install ejs --save`

`npm install @types/ejs --save-dev`

#### 函式庫

[Formidable](https://www.npmjs.com/package/formidable)

`npm install formidable --save`

`npm install @types/formidable --save-dev`

[Lodash](https://www.npmjs.com/package/lodash)

`npm install lodash --save`

`npm install @types/lodash --save-dev`

[Rxjs](https://www.npmjs.com/package/rxjs)

`npm install rxjs --save`
