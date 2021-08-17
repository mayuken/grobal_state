// ユーザーの画像と名前はセットで用いられる可能性が高いので、
// この部分をUserIconWithNameとしてmolucule化しておく
import styled from "styled-components";
// グローバルstateを用いる為にuseContextをインポート
import React, { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

// stateの値だけを用いる場合はuseRecoilValue
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // useContextの引数にどのcontextを用いるのかを指定する
  // 今回はUserProviderで定義したUserContextの中身のuserInfoを分割代入
  // const { userInfo } = useContext(UserContext);

  // useRecoilValueを用いることで、
  // userStateの値をuserInfoに定義する
  const userInfo = useRecoilValue(userState);

  // userInfoの中身が存在しない場合も考慮
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg hight={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
