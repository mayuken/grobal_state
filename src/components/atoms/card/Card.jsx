// ユーザーの情報をカードとして表示させる部分を1つのパーツに見立てて、
// Cardという形でatom化する

import styled from "styled-components";

export const Card = (props) => {
  // カード内に表示する情報をchildrenという形で受け取る
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
