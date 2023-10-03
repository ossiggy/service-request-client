import { Route, Routes } from 'react-router-dom';
import { Display } from '../Display';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Display />} />
    </Routes>
  );
};

export default AppRouter;
