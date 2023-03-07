import Intro from '@/components/Organisms/Intro';
import Title from './Atoms/Title';
import Border from './Atoms/Border';
import MainContainer from './Templates/MainContainer';
export default function Layout() {
  return (
    <>
      <Intro />
      <header>
        <Title />
      </header>
      <main>
        <Border />
        <MainContainer />
      </main>
    </>
  );
}
