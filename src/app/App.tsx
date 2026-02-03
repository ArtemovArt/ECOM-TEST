import { ErrorBoundary } from 'react-error-boundary';

import { Portal } from '../features/portal/portal';
import './App.css';
import { Fallback } from '../shared/fallback/fallback';

import { Layout } from './layout/layout';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Portal id="modal-container" />
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
