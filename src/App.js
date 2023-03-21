import './App.css';
import AuthFlow from './containers/authFlow';
import MainFlow from './containers/mainFlow';
import UploadFlow from './containers/uploadFlow';

function App() {
  return (
    <div className="App">
      <MainFlow />
      <AuthFlow />
      <UploadFlow />
    </div>
  );
}

export default App;
