import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SerchInput } from "../molucules/SerchInput";
import { UserCard } from "../organisms/user/UserCard";

// state値,set関数両方とも用いる場合はuseRecoilState
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `さとけん-${val}`,
    image: "https://source.unsplash.com/OzAeZPNsLXk",
    mail: "mayuge@mail.com",
    tell: "000-0000-0000",
    company: {
      name: "MAYUGE CAMPANY"
    },
    website: "mayuge.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);

  // useRecoilStateの引数を配列形式で受け取る
  // これによって通常のset関数の関係で使用することができる
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SerchInput />{" "}
      {/* userInfoが更新される度に再レンダリングが走ってしまう */}
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} /> // userInfoが更新される度に再レンダリングが走ってしまう
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
