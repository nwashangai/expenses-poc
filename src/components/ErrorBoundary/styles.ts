import styled from "styled-components";
import { Card } from "antd";

export const ErrorContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: var(--error-bg);
`;

export const ErrorCard = styled(Card)`
  &&& {
    position: absolute;
    height: 98%;
    width: 98%;
    max-height: 370px;
    max-width: 700px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    background: var(--gray-1);
  }

  .ant-card-head-title {
    padding: 20px;
    font-size: 3.4rem;
  }

  p {
      padding: 0 20px;
  }
`;
