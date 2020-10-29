import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './logic/redux/store';
import Routes from './routes';
import GlobalStyleApp from './styles/globalStyle';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyleApp />
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
