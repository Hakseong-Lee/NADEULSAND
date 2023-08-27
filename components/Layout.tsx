import Intro from '@/components/Organisms/Intro';
import Title from './Atoms/Main/Title';
import SlideContainer from './Templates/SlideContainer';
import BrandContainer from './Templates/BrandContainer';
const Layout = () => {
  return (
    <>
      <Intro />
      <header>
        <Title>NADEUL SAND COOKIE</Title>
      </header>
      <main>
        <SlideContainer />
        <BrandContainer />
      </main>
    </>
  );
};
export default Layout;
