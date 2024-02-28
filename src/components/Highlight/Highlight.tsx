import { formatToLocalTime } from '@/services/weatherService';
import { WeatherDetails } from '@/interfaces/interface';
import { Row } from 'antd';
import {
  HighlightTitle,
  Container,
  HighlightCont,
  HighlightItems,
  HighlightItem,
  Item,
} from './styles'; // Importing styled components from styles.ts

// HighlightProps is an interface that defines the props
interface HighlightProps {
  weather: WeatherDetails;
}

const Highlight: React.FC<HighlightProps> = ({ weather }) => {
  // Destructuring the weather object
  const {
    feels_like,
    humidity,
    speed,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    timezone,
    pressure,
    visibility,
  } = weather;

  return (
    <Container>
      <HighlightTitle orientation="left" className="divider">
        <h2>TODAY HIGHLIGHT</h2>
      </HighlightTitle>

      {/*HighlightCont, HighlightItems, HighlightItem, Item are styled
      components */}

      <HighlightCont>
        <HighlightItems>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Feels Like</h3>
            </Row>
            <Item>
              <h3>{`${feels_like.toFixed()}°`}</h3>
            </Item>
          </HighlightItem>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Wind</h3>
            </Row>
            <Item>
              <h3>{`${speed.toFixed()} km/h`}</h3>
            </Item>
          </HighlightItem>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Sunrise</h3>
            </Row>
            <Item>
              <h3>{`${formatToLocalTime(sunrise, timezone, 'hh:mm a')}`}</h3>
            </Item>
          </HighlightItem>
        </HighlightItems>
        <HighlightItems>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Humidity</h3>
            </Row>
            <Item>
              <h3>{`${humidity.toFixed()} %`}</h3>
            </Item>
          </HighlightItem>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Pressure</h3>
            </Row>
            <Item>
              <h3>{`${pressure.toFixed()} mb`}</h3>
            </Item>
          </HighlightItem>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Sunset</h3>
            </Row>
            <Item>
              <h3>{`${formatToLocalTime(sunset, timezone, 'hh:mm a')}`}</h3>
            </Item>
          </HighlightItem>
        </HighlightItems>
        <HighlightItems>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Visibility</h3>
            </Row>
            <Item>
              <h3>{`${visibility.toFixed()} m`}</h3>
            </Item>
          </HighlightItem>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Temp Max</h3>
            </Row>
            <Item>
              <h3>{`${temp_max.toFixed()} °`}</h3>
            </Item>
          </HighlightItem>
          <HighlightItem>
            <Row className="subtitle">
              <h3>Temp Min</h3>
            </Row>
            <Item>
              <h3>{`${temp_min.toFixed()} °`}</h3>
            </Item>
          </HighlightItem>
        </HighlightItems>
      </HighlightCont>
    </Container>
  );
};

export default Highlight;
