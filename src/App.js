import { RecoilRoot } from "recoil";
// import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  // コンポーネントの切り分けを行うことで、App.jsがスッキリ
  return (
    // store/userState.jsで作成したuserStateは
    // RecoilRootタグで囲った配下で使うことができる

    // ./providers/UserProvider.jsxで作成した
    // UserProviderコンポーネントで囲うことで、
    // その配下でグローバルstateを扱うことができる
    <RecoilRoot>
      {/* <UserProvider> */}
      <Router />
      {/* </UserProvider> */}
    </RecoilRoot>
  );
}
