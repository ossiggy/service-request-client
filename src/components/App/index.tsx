import { useEffect } from 'react';
import AppRouter from './AppRouter';
import { NavBar } from '../NavBar';
import { useAppDispatch, RequestOptions } from '../../hooks';
import { update } from '../../app/slices';
import { API_URL } from '../../config';
import './App.css';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestOptions: RequestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    };

    const makeRequest: () => void = async () => {
      try {
        const response = await fetch(`${API_URL}`, requestOptions);
        const data = await response.json();
        dispatch(update(data));
      } catch (err) {
        console.error(err);
      }
    };

    makeRequest();

    return () => {};
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
