import './App.css';
import styled from 'styled-components';
import HeaderComponent from './components/HeaderComponent';
import MainContainer from './components/MainContainer';
import SideBarContainer from './components/SideBarComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <BodyContainer>
        <SideBarContainer />
        <MainContainer />
      </BodyContainer>
    </div>
  );
}

export default App;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
