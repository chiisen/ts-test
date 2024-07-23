# 介紹
TypeScript 的介紹與初始設定
內容我已經設定好了，之後新建 TypeScript 專案可以參考使用

---

# 安裝 tsc
tsc 安裝指令輸入如下:
```bash=
npm install -g typescript

// 測試是否安裝成功
tsc --version
```
安裝後就能用 tsc 編譯了 .ts => .js

# 編譯報錯
```bash=
../node_modules/@types/node/globals.d.ts:72:13 - error TS2403: Subsequent variable declarations must have the same type.  Variable 'AbortSignal' must be of type '{ new (): AbortSignal; prototype: AbortSignal; abort(reason?: any): AbortSignal; timeout(milliseconds: number): AbortSignal; }', but here has type '{ new (): AbortSignal; prototype: AbortSignal; timeout(milliseconds: number): AbortSignal; }'.

72 declare var AbortSignal: {
               ~~~~~~~~~~~

  ../../../Users/David/AppData/Roaming/npm/node_modules/typescript/lib/lib.dom.d.ts:2335:13
    2335 declare var AbortSignal: {
                     ~~~~~~~~~~~
    'AbortSignal' was also declared here.


Found 1 error in ../node_modules/@types/node/globals.d.ts:72
```
解決方法，執行下面指令:
```bash=
npm i -d @types/node
```

# ts-node 是甚麼?
可以直接執行 TypeScript 指令檔  
* ts-node 是一個工具，它允許您直接運行 TypeScript 代碼而無需事先將其編譯為 JavaScript。這樣可以加快開發速度並簡化工作流程，特別是在開發和測試時。
* 基本上你可以把 ts-node 看作是 node.js + tsc

ts-node 需要依賴 typescript(tsc)
一般全域安裝為:
```bash=
npm install -g typescript ts-node
```
如果已經安裝 typescript(tsc)，可以只安裝 ts-node
```bash=
npm install -g ts-node
```
如果要透過 VSCode 進行中斷偵錯
要安裝到本地專案的 node_modules 中
```bash=
npm install typescript --save-dev
npm install ts-node --save-dev
```
launch.json 設定如下:
```json=
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Current TS File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceRoot}/node_modules/ts-node/dist/bin.js",
      "args": ["src/index.ts"],
      "cwd": "${workspaceRoot}"
    }
  ]
}

```

# 建立 tsconfig.json
執行下面指令，會產生 tsconfig.json 檔案
```bash=
tsc --init
```
內容我已經設定好了，之後新建 TypeScript 專案可以參考使用

# 建立 package.json
由於 TypeScript 會編譯成 JavaScript 後來執行
所以也需要設定一下 package.json
```bash=
npm init
```
內容我已經設定好了，之後新建 JavaScript 專案可以參考使用

# 建立 tsconfig.build.json
tsconfig.build.json 是 tsconfig.json 的擴充
需要跟 tsconfig.json 同一個目錄
內容主要是編譯相關，例如: 編譯排除特定目錄等等
內容我已經設定好了，之後新建 TypeScript 專案可以參考使用

# 建立 jest.config.js
jest 預設不需要設定
但是也不會檢查 .ts
而 ts-jest 才會檢查 .ts
## 安裝 ts-jest
```bash=
npm install -D jest ts-jest @types/jest
```
要使用 ts-jest 就必須設定 jest.config.js
內容我已經設定好了，之後新建 TypeScript 專案可以參考使用
## 單元測試指令
```bash=
npm test
```

# 安裝 prettier
主要是提供格式化文件的另一個選擇
可以自己客製化
```bash=
npm install --save-dev --save-exact prettier
```
建立 .prettierrc.json 設定檔案與 .prettierignore 忽略檔案
內容我已經設定好了，之後新建 TypeScript 專案可以參考使用

# 安裝 .env 設定檔案
```shell
npm install dotenv
```

# 安裝 ESLint
主要是做靜態分析找出錯誤
可以自己客製化
```bash=
npm install eslint -g
```
建立 .eslintrc.js
內容我已經設定好了，之後新建 TypeScript 專案可以參考使用

# .editorconfig
主要是要保持程式碼風格一致
內容我已經設定好了，之後新建 TypeScript 專案可以參考使用

# 🔅編譯專案內的 .ts 檔案
🔅會更新到 dist 目錄內
```bash=
tsc
```

# 開啟監聽 ts 文件自動編譯
```bash=
tsc -w
```