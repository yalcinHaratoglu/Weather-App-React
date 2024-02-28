import { Button, Flex, Row } from 'antd';
import styled from 'styled-components';

export const Container = styled(Flex)`
  display: flex;
  padding: 0.5rem;
  justify-content: center;

  .first-column {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 1rem 0;
  }
  .second-column {
    padding: 1rem;
    display: flex;
  }
  .info-section {
    padding: 1rem;
  }
  .hidden {
    display: none;
  }
  .main-title {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }
  .main-subtitle {
    font-family: 'Montserrat', sans-serif;
    margin-top: 25px;
    text-align: center;
  }
  #firstInput {
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin-top: 200px;
  }

  @media (max-width: 1350px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    .first-column {
      padding: 0;
      width: 100%;
    }
    .second-column {
      width: 100%;
    }
  }
  @media (max-width: 330px) {
    padding: 0;
  }
`;

export const ForecastCont = styled(Row)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ForecastContBtns = styled(Row)`
  padding: 2rem 0 0 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 1350px) {
    padding-top: 0.5rem;
  }
  @media (max-width: 370px) {
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ForecastContBtn = styled(Row)`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 1rem;
    font-weight: 600;
  }

  Button {
    font-size: 1rem;
    font-weight: 600;
    border: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const ForecastHourlyDailyBtns = styled(Button)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  font-weight: 600;
  border: none;
`;
