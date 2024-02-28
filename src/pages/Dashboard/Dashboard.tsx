import { Row, Col, Button, Spin } from 'antd';
import {
  Container,
  ForecastCont,
  ForecastContBtns,
  ForecastContBtn,
  ForecastHourlyDailyBtns,
} from './styles'; // Importing styled components from styles.ts
import { useState, useEffect } from 'react';
import getFormattedWeatherData from '@/services/weatherService';
import {
  FormattedCurrentWeather,
  FormattedForecastWeather,
  WeatherData,
} from '@/interfaces/interface'; // Importing interfaces from interface.ts
import Forecast from '@/components/Forecast/Forecast';
import Inputs from '@/components/Inputs/Inputs';
import Highlight from '@/components/Highlight/Highlight';
import TimeAndLocation from '@/components/TimeAndLocation/TimeAndLocation';
import Title from 'antd/es/typography/Title';

const Dashboard = () => {
  const [query, setQuery] = useState<{
    q?: string;
    lat?: number;
    lon?: number;
  }>({ q: '' }); // Setting the initial state of query
  const [units, setUnits] = useState('metric'); // Setting the initial state of units
  const [weather, setWeather] = useState<
    (FormattedCurrentWeather & FormattedForecastWeather & WeatherData) | null
  >(null); // Setting the initial state of weather
  const [selectedForecast, setSelectedForecast] = useState<'Hourly' | 'Daily'>(
    'Hourly'
  ); // Setting the initial state of selectedForecast Hourly or Daily
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    // Fetching weather data
    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        await getFormattedWeatherData({ ...query, units }).then((data) => {
          setWeather(
            data as FormattedCurrentWeather &
              FormattedForecastWeather &
              WeatherData
          );
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    switch (weather?.details) {
      case 'Clear':
        setImage('../../../public/images/Clear.png');
        break;
      case 'Clouds':
        setImage('../../../public/images/Clouds.png');
        break;
      case 'Rain':
      case 'Drizzle':
        setImage('../../../public/images/Rain.png');
        break;
      case 'Mist':
        setImage('../../../public/images/Mist.png');
        break;
      case 'Thunderstorm':
        setImage('../../../public/images/Thunderstorm.png');
        break;
      case 'Snow':
        setImage('../../../public/images/Snow.png');
        break;
      default:
        setImage('../../../public/images/Clear.png');
        break;
    }
  }, [query, units, weather]);

  // Function to handle the change of units
  const handleUnitsChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  // Hiding the input field when the weather data is fetched
  const selectedInput = document.getElementById('firstInput');
  if (weather) {
    selectedInput?.classList.add('hidden');
  }

  return (
    <Container>
      <Row id="firstInput">
        <Title level={1} className="main-title">
          Weather Forecast
        </Title>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        <Title level={3} className="main-subtitle">
          Please enter a location to get started or click on the location icon!
        </Title>
      </Row>
      {!isLoading ? (
        weather ? (
          <>
            <Col className="first-column">
              <Row>
                <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
              </Row>

              <Col className="info-section">
                <TimeAndLocation weather={weather} image={image} />
              </Col>
            </Col>

            <Col className="second-column">
              <ForecastCont>
                <ForecastContBtns>
                  <ForecastContBtn>
                    <ForecastHourlyDailyBtns
                      onClick={() => setSelectedForecast('Hourly')}
                    >
                      Hourly
                    </ForecastHourlyDailyBtns>
                    <p>/</p>
                    <ForecastHourlyDailyBtns
                      onClick={() => setSelectedForecast('Daily')}
                    >
                      Daily
                    </ForecastHourlyDailyBtns>
                  </ForecastContBtn>
                  <ForecastContBtn>
                    <Button name="metric" onClick={handleUnitsChange}>
                      °C
                    </Button>
                    <Button name="imperial" onClick={handleUnitsChange}>
                      °F
                    </Button>
                  </ForecastContBtn>
                </ForecastContBtns>

                {selectedForecast === 'Hourly' && (
                  <Forecast
                    title="HOURLY WEATHER FORECAST"
                    items={weather?.hourly}
                  />
                )}
                {selectedForecast === 'Daily' && (
                  <Forecast
                    title="DAILY WEATHER FORECAST"
                    items={weather?.daily}
                  />
                )}

                <Highlight weather={weather} />
              </ForecastCont>
            </Col>
          </>
        ) : (
          <Col className="just-placeholder"></Col>
        )
      ) : (
        <Row
          justify="center"
          style={{ height: '80vh', position: 'absolute', top: '50%' }}
        >
          <Spin size="large" />
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;
