import Intro from '@/components/Organisms/Intro';
import Title from './Atoms/Main/Title';
import MainContainer from './Templates/MainContainer';
const Layout = () => {
  return (
    <>
      <Intro />
      <header>
        <Title>NADEUL SAND COOKIE</Title>
      </header>
      <main>
        <MainContainer />
      </main>
    </>
  );
};
export default Layout;
