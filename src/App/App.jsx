import { Header } from 'components/Header';
import { GlobalStyles } from '@/theme';
import { Calculator } from 'components/Calculator';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <Header />
      <Calculator />
    </div>
  );
};

export default App;
