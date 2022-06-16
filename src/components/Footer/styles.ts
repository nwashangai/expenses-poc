import styled from "styled-components";
import { Typography } from "antd";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 20px;
`;

export const Text = styled(Typography.Text)<{ isBold: boolean }>`
  font-size: 18px;
  ${(props) => props.isBold && "font-weight: bold;"}

  &:first-child {
    margin-right: 20px;
  }
`;
