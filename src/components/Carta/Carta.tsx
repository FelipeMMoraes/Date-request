import React, { useState } from "react";
import {
  BotaoPopup,
  BotoesContainer,
  CartaContainer,
  ImagemAdicionalContainer,
  ImagemCarta,
  PopupContainer,
} from "./carta.styles";

import ring from "../../../public/images/anel.jpg";
import card from "../../../public/images/carta.png";

interface CartaProps {
  onButtonClick: () => void;
}

const Carta: React.FC<CartaProps> = ({ onButtonClick }) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({
    top: "50%",
    left: "50%",
  });
  const [popupContent, setPopupContent] = useState("Aceita namorar comigo?");
  const [namorando, setNamorando] = useState(false);

  const handleImagemClick = () => {
    setMostrarPopup(true);
    onButtonClick();
  };

  const handlePopupButtonClick = () => {
    setPopupContent("Agora estamos namorando oficialmente!");
    setNamorando(true);
    // Mantenha o popup aberto após clicar no botão "Sim"
  };

  const handleNaoHover = () => {
    const novoTop = `${Math.floor(Math.random() * 80 + 10)}%`;
    const novoLeft = `${Math.floor(Math.random() * 80 + 10)}%`;
    setPopupPosition({ top: novoTop, left: novoLeft });
  };

  const centralizarPopup = () => {
    setPopupPosition({ top: "50%", left: "50%" });
  };

  return (
    <CartaContainer>
      <ImagemCarta
        src={card}
        alt="Carta de namoro"
        onClick={handleImagemClick}
      />
      {mostrarPopup && (
        <PopupContainer
          style={{
            top: popupPosition.top,
            left: popupPosition.left,
          }}
        >
          <p>{popupContent}</p>
          {namorando && (
            <div>
              <ImagemAdicionalContainer>
                <img src={ring} alt="Imagem adicional" />
              </ImagemAdicionalContainer>
            </div>
          )}
          {namorando ? null : (
            <BotoesContainer>
              <BotaoPopup
                onClick={() => {
                  centralizarPopup();
                  handlePopupButtonClick();
                }}
              >
                Sim
              </BotaoPopup>
              <BotaoPopup
                onMouseOver={handleNaoHover}
                onClick={() => {
                  centralizarPopup();
                  handlePopupButtonClick();
                }}
              >
                Não
              </BotaoPopup>
            </BotoesContainer>
          )}
        </PopupContainer>
      )}
    </CartaContainer>
  );
};

export default Carta;
