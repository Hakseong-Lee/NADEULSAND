import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import '../styles/globalstyle.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
