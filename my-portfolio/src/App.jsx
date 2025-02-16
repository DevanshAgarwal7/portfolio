import './App.css'
import { LoadingBarContainer } from 'react-top-loading-bar';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <LoadingBarContainer props={{
      color: "red",
      height: "10",
      transitionTime: "300"
    }}>
      <Portfolio />
    </LoadingBarContainer>
  );
}

export default App
