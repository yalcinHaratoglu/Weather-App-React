import { ConfigProvider } from 'antd';
import AllRoutes from './routes';
import GlobalStyles from './theme/GlobalStyles';
import Token from '@/theme/token';

function App() {
  return (
    <ConfigProvider theme={Token()}>
      <GlobalStyles />
      <AllRoutes />
    </ConfigProvider>
  );
}

export default App;
