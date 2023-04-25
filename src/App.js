import { SnackbarProvider } from 'notistack';
import './App.css';
import AuthFlow from './containers/authFlow';
import MainFlow from './containers/mainFlow';
import UploadFlow from './containers/uploadFlow';
import { Navigate, Route, Routes } from 'react-router-dom';
import ImageSwap from './containers/mainFlow/ImageSwap page/ImageSwap';
import VideoSwap from './containers/mainFlow/VideoSwap page/VideoSwap';
import GifSwap from './containers/mainFlow/GifSwap page/GifSwap';
import TermsAndCondition from './containers/mainFlow/Terms page/TermsAndCondition';
import RefundPolicy from './containers/mainFlow/Terms page/RefundPolicy';
import RequireSubscription from './components/ProtectedRoutes/RequireSubscription';
import Gallery from './containers/mainFlow/Gallery page/Gallery';
import PricingPage from './containers/paymentFlow/PricingPage';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

const tracking_id = 'G-6NSWZJ8DWL'
ReactGA.initialize(tracking_id)

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Page being viewd" });
  },[])


  return (
    <SnackbarProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to={'/home'} />} />
          <Route path='home/*' index element={<MainFlow />} />

          <Route path="/image-swap" exact element={<ImageSwap />} />
          <Route path="/video-swap" exact element={<VideoSwap />} />
          <Route path="/gif-swap" exact element={<GifSwap />} />
          <Route path="/termsAndCondition" exact element={<TermsAndCondition />} />
          <Route path="/refund" exact element={<RefundPolicy />} />
          <Route path="/locker" exact element={<RequireSubscription><Gallery /></RequireSubscription>} />


          <Route path='auth/*' element={<AuthFlow />} />
          <Route path='/*' element={<UploadFlow />} />
          {/* <Route path='buy/*' element={<PaymentFlow />} /> */}
          <Route path="/pricing" exact element={<PricingPage />} />
        </Routes>


        {/* <AuthFlow />
      <UploadFlow />
      <PaymentFlow /> */}
      </div>
    </SnackbarProvider>
  );
}

export default App;
