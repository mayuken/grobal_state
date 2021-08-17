import styled from "styled-components";

export const Input = (props) => {
  // 受け取ったplaceholderを分割代入する
  // 送り先と同じ名前にする必要がある？？childrenでは受け取れず...
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
