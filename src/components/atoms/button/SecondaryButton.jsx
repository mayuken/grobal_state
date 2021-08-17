import styled from "styled-components";
// BaseButton.jsxでまとめたスタイルコンポーネントをインポート
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

// const タグ名(任意) = styled(コンポーネント名)で
// スタイルコンポーネントの内容を踏襲できる!!
// このままスタイルを上書きすることも可能
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
