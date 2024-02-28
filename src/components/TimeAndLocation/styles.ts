import { Col } from 'antd';
import styled from 'styled-components';

export const Container = styled(Col)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  height: 799px;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .city-and-country {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .main-image {
    margin: 1rem 0;
    width: 325px;
    aspect-ratio: 1/1;
    max-width: 100%;
  }
  .sub-image {
    width: 50px;
  }
  .degree {
    font-size: clamp(2rem, 7vw, 6rem);
    margin: 0;
  }
  .time {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .weather {
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
  .forecast {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  @media (max-width: 1350px) {
    height: 100%;
  }
`;
