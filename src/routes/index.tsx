import { Route, Routes } from 'react-router-dom';
import paths from '@/routes/paths';
import Dashboard from '@/pages/Dashboard/Dashboard';

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.dashboard} element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
