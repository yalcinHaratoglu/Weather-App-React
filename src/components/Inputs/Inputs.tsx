import { Input, InputRef } from 'antd';
import { InputBtns, StyledInput } from './styles';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useState, useRef, useEffect } from 'react';

interface InputsProps {
  setQuery: (query: { [key: string]: string | number }) => void;
  units: string;
  setUnits: (units: string) => void;
}

const Inputs: React.FC<InputsProps> = ({ setQuery }) => {
  const [city, setCity] = useState<string>('');
  const inputRef = useRef<InputRef | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (city) setQuery({ q: city });
    }
  };

  const handleSearch = () => {
    if (city) setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setQuery({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  };

  return (
    <StyledInput>
      <Input
        ref={inputRef}
        className="input"
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text"
        placeholder="Enter city name..."
        onKeyDown={handleKeyPress}
      />
      <InputBtns
        shape="circle"
        icon={<SearchOutlined />}
        onClick={handleSearch}
      ></InputBtns>
      <InputBtns
        shape="circle"
        icon={<EnvironmentOutlined />}
        onClick={handleLocation}
      ></InputBtns>
    </StyledInput>
  );
};

export default Inputs;
