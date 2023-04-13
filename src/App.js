import { SnackbarProvider } from 'notistack';
import './App.css';
import AuthFlow from './containers/authFlow';
import MainFlow from './containers/mainFlow';
import UploadFlow from './containers/uploadFlow';
import PaymentFlow from './containers/paymentFlow';
import { Navigate, Route, Routes } from 'react-router-dom';
// import LandingPage from './containers/mainFlow/Landing page/LandingPage';

function App() {
  return (
    <SnackbarProvider>
    <div className="App">
    <Routes>
      <Route path="/" element={<Navigate replace to={'/main'}/>} />
      <Route path='main/*' index element={<MainFlow />} />
      <Route path='auth/*' element={<AuthFlow />} />
      <Route path='swap/*' element={<UploadFlow />} />
      <Route path='buy/*' element={<PaymentFlow />} />
    </Routes>
    {/* <Routes */}
    {/* <MainFlow />
    <AuthFlow /> */}

      {/* <AuthFlow />
      <UploadFlow />
      <PaymentFlow /> */}
    </div>
    </SnackbarProvider>
  );
}

export default App;
