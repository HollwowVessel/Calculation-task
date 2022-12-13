import ErrorBoundary from 'components/ErrorBoundary';
import { AppRouter } from './AppRouter';

const App = () => {
  return (
    <div className='App'>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </div>
  );
};

export default App;
