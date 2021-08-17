// グローバルstateを定義する為に
// reactの中にあるcreateContextを用いる
import { createContext, useState } from "react";

// 今回はuserのグローバルstateなので、UserContextとする
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  // useStateを用いてユーザーの情報を持つuserInfoを定義する
  const [userInfo, setUserInfo] = useState(null);

  return (
    // createContextに含まれるProviderを用いると、
    // valueに定義したものをグローバルstateとして用いることができる
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {/* providerは一般的に要素を囲って使用するので、childrenを定義してあげる */}
      {children}
    </UserContext.Provider>
  );
};
