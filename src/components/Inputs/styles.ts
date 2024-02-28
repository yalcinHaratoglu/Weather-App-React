import styled from 'styled-components';
import { Col, Button } from 'antd';

export const StyledInput = styled(Col)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 1rem;
  padding: 1rem;
  .input {
    width: 100%;
    text-transform: uppercase;
  }
`;

export const InputBtns = styled(Button)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  font-weight: 600;
  border: none;
`;
