import { SnackbarProvider } from 'notistack';
import './App.css';
import AuthFlow from './containers/authFlow';
import MainFlow from './containers/mainFlow';
import UploadFlow from './containers/uploadFlow';
// import PaymentFlow from './containers/paymentFlow';

function App() {
  return (
    <SnackbarProvider>
    <div className="App">
      <MainFlow />
      <AuthFlow />
      <UploadFlow />
      {/* <PaymentFlow /> */}
    </div>
    </SnackbarProvider>
  );
}

export default App;
