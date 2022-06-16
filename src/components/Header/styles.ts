import styled from "styled-components";
import { Typography, Select } from "antd";

export const HeadContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 40px 0 50px;
`;

export const Text = styled(Typography.Text)`
  font-size: 15px;
  margin-right: 20px;
`;

export const Dropdown = styled(Select)`
  min-width: 200px;
  text-align: left;
`;
