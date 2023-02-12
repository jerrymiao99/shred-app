import './App.css';
import LayoutFlow from './components/LayoutFlow';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <div className="container">
      <ReactFlowProvider>
        <LayoutFlow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
