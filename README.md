# ts-test
TypeScript 測試

---

tsc 安裝指令輸入
```bash=
npm install -g typescript

// 測試是否安裝成功
tsc --version
```
安裝後就能用 tsc 編譯了 .ts => .js

# ts-node 是甚麼?
可以直接執行 TypeScript 指令檔
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



