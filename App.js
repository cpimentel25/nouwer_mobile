import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Nouwer from './src/index';

export default function App() {

  return (
    <Provider store={store}>
      <Nouwer />
    </Provider>
  );
}
