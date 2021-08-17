import React, { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

// Users.jsxのuserInfoが更新される度に
// このコンポーネントも再レンダリングされてしまうので
// memoを用いてそれを防ぐ
export const SerchInput = memo(() => {
  return (
    <div>
      <SContainer>
        {/* コンポーネントにplaceholderとして値を渡す */}
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
