import './App.css';
import LayoutFlow from './components/LayoutFlow';
import { ReactFlowProvider } from 'reactflow';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="react-flow-container">
        <ReactFlowProvider>
          <LayoutFlow />
        </ReactFlowProvider>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
