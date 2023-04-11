import { SnackbarProvider } from 'notistack';
import './App.css';
import AuthFlow from './containers/authFlow';
import MainFlow from './containers/mainFlow';
import UploadFlow from './containers/uploadFlow';
import PaymentFlow from './containers/paymentFlow';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './containers/mainFlow/Landing page/LandingPage';

function App() {
  return (
    <SnackbarProvider>
    <div className="App">
    {/* <Routes>
      <Route path='/' index element={<LandingPage />} />
    </Routes> */}
      <MainFlow />

      <AuthFlow />
      <UploadFlow />
      <PaymentFlow />
    </div>
    </SnackbarProvider>
  );
}

export default App;
