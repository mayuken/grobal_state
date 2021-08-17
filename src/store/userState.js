// recoilの機能の一つ、atomをインポートする
import { atom } from "recoil";

// atomで囲うことで
// JSON形式で定義した値をグローバルで扱うことができる
export const userState = atom({
  // キー名userState
  key: "userState",
  // 初期値がfalseのisAdmin
  default: { isAdmin: false }
});
