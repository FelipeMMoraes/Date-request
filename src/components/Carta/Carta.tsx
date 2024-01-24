// Carta.tsx
import React, { useState } from "react";
import {
  BotaoPopup,
  BotoesContainer,
  CartaContainer,
  ImagemAdicionalContainer,
  ImagemCarta,
  PopupContainer,
} from "./carta.styles";

interface CartaProps {
  onImageClick: () => void;
}

const Carta: React.FC<CartaProps> = ({ onImageClick }) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({
    top: "50%",
    left: "50%",
  });
  const [popupContent, setPopupContent] = useState(
    "Aceita namorar comigo oficialmente?"
  );
  const [namorando, setNamorando] = useState(false);

  const handleImagemClick = () => {
    setMostrarPopup(true);
    onImageClick();
  };

  const handlePopupButtonClick = (resposta: boolean) => {
    setPopupContent("Agora estamos namorando oficialmente!");
    setNamorando(true);
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
        src="../../../public/images/carta.png"
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
                <img
                  src="../../../public/images/anel.jpg"
                  alt="Imagem adicional"
                />
              </ImagemAdicionalContainer>
            </div>
          )}
          {namorando ? null : (
            <BotoesContainer>
              <BotaoPopup
                onClick={() => {
                  centralizarPopup();
                  handlePopupButtonClick(true);
                }}
              >
                Sim
              </BotaoPopup>
              <BotaoPopup
                onMouseOver={handleNaoHover}
                onClick={() => {
                  centralizarPopup();
                  handlePopupButtonClick(false);
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
