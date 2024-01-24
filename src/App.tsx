// App.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Carta from "./components/Carta/Carta";

const AppContainer = styled.div`
  margin: 0;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/bg.jpg");
  background-size: cover;
`;

const App: React.FC = () => {
  const [namorando, setNamorando] = useState(false);

  const handleButtonClick = () => {
    // Implemente a lógica necessária para o pedido de namoro
    if (!namorando) {
      console.log('Botão "Sim" clicado. Pedido de namoro aceito!');
      setNamorando(true);
    }
  };

  return (
    <AppContainer>
      <Carta onButtonClick={handleButtonClick} />
    </AppContainer>
  );
};

export default App;
