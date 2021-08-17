// Cardというatomと、UserIconWithNameというmoluculeの集合体を
// UserCardという形でorganism化する

import React, { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molucules/user/UserIconWithName";

// Users.jsxのuserInfoが更新される度に
// このコンポーネントも再レンダリングされてしまうので
// memoを用いてそれを防ぐ
export const UserCard = memo((props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>MAIL</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.tell}</dd>
        <dt>CAMPANY NAME</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
