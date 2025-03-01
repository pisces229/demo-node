## 建立專案

`mkdir demo-node`

### 初始化 package.json 檔案

`npm init -y`

### 產生 .npmrc 檔案

`echo 'loglevel=silent' > .npmrc`

### 安裝 TypeScript 必備的 npm 套件

`npm install typescript @types/node tslint nodemon ts-node --save-dev`

### 初始化 tsconfig.json 設定檔

`npx typescript --init`

`npx tsc --init`

### 初始化 tslint.json 設定檔

`npx tslint --init`

### 初始化 .editorconfig 編輯器設定檔

`npx node-editorconfig`

### 參考文章

[The Will Will Web - 如何快速建置一個 Node.js 專案並使用 TypeScript 與 VSCode 進行開發](https://blog.miniasp.com/post/2021/07/18/Build-Nodejs-Dev-Env-with-TypeScript-Nodemon-and-VSCode)

[程式碼檢查](https://willh.gitbook.io/typescript-tutorial/engineering/lint)

## Node Package Manager
### 框架
#### [Top 12 Best Node.js Frameworks](https://www.simform.com/blog/best-nodejs-frameworks/)
* Express.js- Express for Everyone
* Koa.js- Next Generation Node.js Framework
* Meteor.js- One Application, One Language
* Socket.io- Chat Apps Made Easy with Socket.io
* Nest.js- A Nestling of Code
* Sails.js- Modernized Data-Oriented MVC Framework 
* Total.js- A Complete Framework
* Hapi.js- Secure than Ever
* Feather.js- F for Flexible
* Loopback.js- Better Connectivity
* Adonis.js-The Dependable Framework
* Derby.js-The Racer

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

### 模版引擎

[pug](https://www.npmjs.com/package/pug)

`npm install pug --save`

`npm install @types/pug --save-dev`

[ejs](https://www.npmjs.com/package/ejs)

`npm install ejs --save`

`npm install @types/ejs --save-dev`

### 函式庫

[Formidable](https://www.npmjs.com/package/formidable)

`npm install formidable --save`

`npm install @types/formidable --save-dev`

[Lodash](https://www.npmjs.com/package/lodash)

`npm install lodash --save`

`npm install @types/lodash --save-dev`

[Rxjs](https://www.npmjs.com/package/rxjs)

`npm install rxjs --save`

[json-server](https://github.com/typicode/json-server)

`npm install json-server @types/json-server --save-dev`

### Upgrading npm dependencies

* Use `npm outdated` to discover dependencies that are out of date
* Use `npm update` to perform safe dependency upgrades
* Use `npm install <packagename>@latest` to upgrade to the latest major version of a package
* Use `npx npm-check-updates -u` and `npm install` to upgrade all dependencies to their latest major versions

### Self Certification

[Install Chocolatey with PowerShell](https://docs.chocolatey.org/en-us/choco/setup)

`choco --version`

`choco install mkcert`

`mkcert -install`

`mkcert -help`

`mkcert localhost 127.0.0.1 ::1`
