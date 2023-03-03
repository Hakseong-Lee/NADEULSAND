import { ThemeProvider } from 'styled-components';
import '../styles/globalstyle.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
