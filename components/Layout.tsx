import Intro from '@/components/Organisms/Intro';
import Title from './Atoms/Title';
import MainContainer from './Organisms/MainContainer';
export default function Layout() {
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
}
