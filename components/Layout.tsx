import Intro from '@/components/Organisms/Intro';
import Title from './Atoms/Title';
import MainContainer from './Templates/MainContainer';
const Layout = () => {
  return (
    <>
      <Intro />
      <header>
        <Title />
      </header>
      <main>
        <MainContainer />
      </main>
    </>
  );
};
export default Layout;
