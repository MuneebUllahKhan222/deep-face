import { SnackbarProvider } from 'notistack';
import './App.css';
import AuthFlow from './containers/authFlow';
import MainFlow from './containers/mainFlow';
import UploadFlow from './containers/uploadFlow';

function App() {
  return (
    <SnackbarProvider>
    <div className="App">
      <MainFlow />
      <AuthFlow />
      <UploadFlow />
    </div>
    </SnackbarProvider>
  );
}

export default App;
