import { Col, Flex } from 'antd';
import styled from 'styled-components';
import { colors } from '@/theme/index';

export const StyledForecast = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 1rem;
  .divider {
    border-color: ${colors.primaryDark};
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 490px) {
    .divider {
      white-space: wrap;
    }
  }
`;

export const ForecastCol = styled(Col)`
  display: flex;
  justify-content: space-between;
  gap: 25px;

  .each-forecast {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .each-forecast h3 {
    font-size: 1.3rem;
  }
  @media (max-width: 1010px) {
    flex-direction: column;
    .each-forecast h3 {
      font-size: 1.5rem;
    }
  }
`;
