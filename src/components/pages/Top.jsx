import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

// set関数のみの場合はuseRecoilState
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // useContextを用いてUserProvider.jsxで定義した
  // setUserInfoをUserContextから分割代入する
  // const { setUserInfo } = useContext(UserContext);

  // useRecoilStateを用いることで
  // 引数に当てた値のset関数を定義できる
  const setUserInfo = useRecoilState(userState);

  const onClickAdmin = () => {
    // 上記で定義したsetUserInfo関数を用いてuserInfoに{ isAdmin: true }を定義
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
