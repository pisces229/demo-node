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
[Express](https://github.com/expressjs/express)
`npm install express --save`
`npm install @types/express --save-dev`
[Lodash](https://github.com/lodash/lodash)
`npm install lodash --save`
`npm install @types/lodash --save-dev`
[Rxjs](https://github.com/reactivex/rxjs)
`npm install rxjs --save`
