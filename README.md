# 📘 TypeScript 專案初始指南 🚀

這是一個關於 TypeScript 的基礎介紹與初始設定手冊。
我已經預先整理好相關設定檔，未來在建立新的 TypeScript 專案時，可以直接參考並套用這些配置！✨

---

## 🛠️ 安裝 TypeScript 編譯器 (tsc)
首先，我們需要安裝 TypeScript 編譯器。請在終端機輸入以下指令：

```bash=
npm install -g typescript

// 驗證是否安裝成功
tsc --version
```
安裝完成後，你就能使用 `tsc` 指令將 `.ts` 檔案編譯成 `.js` 囉！📦

## 💡 常見編譯報錯處理
如果在編譯過程中遇到類似下方的錯誤訊息：

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

這通常是型別定義衝突造成的。你可以透過執行以下指令來解決：

```bash=
npm i -d @types/node
```
🔧 執行後即可修復 `AbortSignal` 的重複宣告問題。

## 🏃‍♂️ 什麼是 ts-node？
`ts-node` 是一個強大的工具，讓你可以**直接執行** TypeScript 指令檔，而不需要事先將其編譯為 JavaScript。

* ⚡ **開發利器**：跳過編譯步驟，大幅提升開發與測試速度，特別是在開發與偵錯階段。
* 🧱 **核心原理**：基本上你可以把 `ts-node` 看作是 `node.js` + `tsc` 的結合體。

### 安裝方式
`ts-node` 必須依賴 `typescript (tsc)`。

**全域安裝：**
```bash=
npm install -g typescript ts-node
```

**若已安裝 TypeScript，可單獨安裝：**
```bash=
npm install -g ts-node
```

### 🐞 VSCode 中斷點偵錯設定
如果要透過 VSCode 進行偵錯，建議將其安裝到本地專案的 `node_modules` 中：

```bash=
npm install typescript --save-dev
npm install ts-node --save-dev
```

`launch.json` 設定參考如下：
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

## ⚙️ 專案設定檔說明

### 📝 建立 tsconfig.json
執行以下指令來產生 `tsconfig.json`：
```bash=
tsc --init
```
> [!TIP]
> 專案內已包含最佳化的設定，未來新建專案時可直接參考套用。

### 📦 建立 package.json
管理專案資訊與依賴套件：
```bash=
npm init
```

### 🏗️ 建立 tsconfig.build.json
這是 `tsconfig.json` 的擴充，通常用於編譯階段的特殊處理（例如排除測試目錄）。
* 🔔 **注意**：請確保此檔案與 `tsconfig.json` 置於同一目錄下。

## 🧪 單元測試架構 (Jest + ts-jest)
Jest 預設不支援直接檢查 `.ts` 檔案，因此我們需要透過 `ts-jest` 來達成。

### 1. 安裝測試套件
```bash=
npm install -D jest ts-jest @types/jest
```

### 2. 設定與執行
使用 `ts-jest` 必須配置 `jest.config.js`。
* 🧪 **執行單元測試**：
```bash=
npm test
```

## 🎨 程式碼風格與品質控管

### ✨ Prettier (程式碼格式化)
確保團隊開發時的程式碼風格一致：
```bash=
npm install --save-dev --save-exact prettier
```
搭配專案內的 `.prettierrc.json` 與 `.prettierignore` 設定即可生效。

### 🔍 ESLint (靜態分析)
幫助你在編寫程式時即時找出錯誤並規範寫法：
```bash=
npm install eslint -g
```
搭配 `.eslintrc.js` 檔案進行客製化規範。

### 📏 .editorconfig
維持不同編輯器之間的縮排與編碼風格一致。

## 🔐 環境變數管理 (.env)
```shell
npm install dotenv
```

---

## 🚀 編譯與自動監控

### 🏗️ 編譯專案內的 .ts 檔案
執行後會將編譯結果更新到 `dist` 目錄內：
```bash=
tsc
```

### 👀 開啟自動監聽編譯
存檔後即刻自動編譯，開發時非常方便：
```bash=
tsc -w
```

---
*祝你的 TypeScript 開發旅程順利！💪*

