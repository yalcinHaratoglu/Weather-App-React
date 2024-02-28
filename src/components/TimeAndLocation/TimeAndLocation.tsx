import { formatToLocalTime } from '../../services/weatherService';
import { WeatherData } from '../../interfaces/interface';
import { Col, Image, Row } from 'antd';
import { Container } from './styles';

interface TimeAndLocationProps {
  weather: WeatherData;
  image: string;
}

const TimeAndLocation: React.FC<TimeAndLocationProps> = ({
  weather,
  image,
}) => {
  const { dt, timezone, name, country, details, temp } = weather;
  return (
    <Container>
      <Col className="city-and-country">
        <p>{`${name} / ${country}`}</p>
      </Col>

      <Row>
        <Image className="main-image" src={image} alt="icon" />
      </Row>

      <Row>
        <h2 className="degree">{`${temp.toFixed()}°`}</h2>
      </Row>

      <Row className="forecast">
        <img src={image} className="sub-image" alt="icon" />
        <p className="weather">{details}</p>
      </Row>
      <Row>
        <p className="time">{formatToLocalTime(dt, timezone)}</p>
      </Row>
    </Container>
  );
};

export default TimeAndLocation;
