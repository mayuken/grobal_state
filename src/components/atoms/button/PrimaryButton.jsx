// コンポーネント化の原則としてそのコンポーネントはなんの役割かを意識することが大切

// styled-componentsを用いることでコンポーネントファイル内にcssを記述できる
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

// ボタンは大体の場合、対応するボタン文言が定義されるはずなので、
// 引数としてpropsを渡しておくと、その後の流用性が上がる
export const PrimaryButton = (props) => {
  // 受け取ったpropsをchildrenとして定義して、それをボタンの文言に当てることで、
  // 呼び出し先でボタン文言を表示できる
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// const タグ名（任意） = syyled.タグ種`スタイル`で定義する
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
