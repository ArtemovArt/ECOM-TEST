import { Portal } from '../features/portal/portal';
import './App.css';

import { Layout } from './layout/layout';

function App() {
  return (
    <>
      <Portal id="modal-container" />
      <Layout />
    </>
  );
}

export default App;
