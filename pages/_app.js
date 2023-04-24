import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globalstyle.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
