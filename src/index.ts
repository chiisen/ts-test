import * as dotenv from "dotenv"
dotenv.config()

if (process.env.TEST === undefined) {
  console.error(".env 檔案中未設定 TEST 環境變數。")
  process.exit(1)
}

/**
 * 單元測試用
 *
 * @param name 名子
 * @returns
 */
export function hello(name: string): string {
  return `Hello ${name}`
}

let message: string = "Hello, World!"
console.log(message)
