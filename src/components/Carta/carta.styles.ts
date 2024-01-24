// Carta.styles.ts
import styled from "styled-components";

export const CartaContainer = styled.div`
  position: relative;
  width: 500px; /* ou o tamanho desejado */
  height: auto; /* Altura automática para manter a proporção da imagem */
  margin: 0 auto; /* Centraliza a carta na tela horizontalmente */
`;

export const ImagemCarta = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ff66b2; /* Rosa mais forte */
  padding: 20px;
  text-align: center;
  border-radius: 10px;
`;

export const BotoesContainer = styled.div`
  margin-top: 20px;
`;

export const BotaoPopup = styled.button`
  background: #fff;
  color: #ff66b2;
  padding: 10px 20px;
  margin: 0 10px;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: #ff66b2;
    color: #fff;
  }
`;

export const ImagemAdicionalContainer = styled.div`
  margin-top: 20px;
`;
