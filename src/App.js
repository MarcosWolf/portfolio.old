import Header from './components/Header';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';

import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Intro />
      <Experience />
      <Projects />
    </AppContainer>
  )
}

export default App;
