import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Activity from './pages/Activity';
import NotFound from './components/notFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './components/error';
import { useSelector } from 'react-redux';
const App = () => {
  const isError = useSelector((state) => state.accountState.error);
  return (
    <div id="content">
      <div id="bar"></div>
      <div id="header">
        <div>
          <h1>MagicHesap</h1>
          <p>Hesap Uzmanı</p>
        </div>
      </div>
      {isError && <Error />}
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="Activity" element={<Activity />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
