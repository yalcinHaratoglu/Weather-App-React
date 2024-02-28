import { Col, Image, Divider } from 'antd';
import { StyledForecast, ForecastCol } from './styles';
import { useState, useEffect } from 'react';

interface ForecastProps {
  title: string;
  items: {
    title: string;
    icon: string;
    temp: number;
    details: string;
  }[];
}

const Forecast: React.FC<ForecastProps> = ({ items, title }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const itemImages = items.map(
      (item) => `../../../public/images/${item?.details}.png`
    );
    setImages(itemImages);
  }, [items]);

  return (
    <StyledForecast>
      <Divider className="divider" orientation="left">
        <h2>{title}</h2>
      </Divider>

      <ForecastCol>
        {items.map((item, index) => (
          <ForecastCol key={index} className="each-forecast">
            <h3>{item.title}</h3>
            <Image
              src={images[index]}
              alt="WEATHER"
              style={{ width: '100px' }}
            />
            <Col>
              <h3>{`${item.temp.toFixed()}°`}</h3>
            </Col>
          </ForecastCol>
        ))}
      </ForecastCol>
    </StyledForecast>
  );
};

export default Forecast;
