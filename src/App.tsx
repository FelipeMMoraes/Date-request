import React from "react";
import styled from "styled-components";
import Carta from "./components/Carta/Carta";

const AppContainer = styled.div`
  margin: 0;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/public/images/bg.jpg");
  background-size: cover;
`;

const App: React.FC = () => {
  const handleButtonClick = () => {};

  return (
    <AppContainer>
      <Carta onButtonClick={handleButtonClick} />
    </AppContainer>
  );
};

export default App;
