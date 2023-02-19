import Header from './components/Header';
import Intro from './components/Intro';

import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Intro />
    </AppContainer>
  )
}

export default App;
