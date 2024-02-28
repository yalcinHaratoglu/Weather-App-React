import { Divider, Col, Flex, Row } from 'antd';
import styled from 'styled-components';
import { colors } from '@/theme/index';

export const Container = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 2rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  gap: 10px;
  .divider {
    border-color: ${colors.primaryDark};
  }
  @media (max-width: 575px) {
    padding: 0.5rem;
  }
`;

export const HighlightTitle = styled(Divider)`
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
  }
  @media (max-width: 490px) {
    white-space: wrap;
  }
`;

export const HighlightCont = styled(Flex)`
  flex-direction: column;
  gap: 25px;
  max-height: 315px;
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  @media (max-width: 1000px) {
    max-height: 100%;
  }
`;

export const HighlightItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  @media (max-width: 800px) {
    flex-direction: column;
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const HighlightItem = styled(Row)`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 0.5rem;
  gap: 5px;
  .subtitle {
    display: flex;
    justify-content: center;
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

export const Item = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 1.7rem;
  }
`;
