import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProductImage
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <S.ProductTitle>Product Title</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>4.1</S.Review>
        <S.Price>R$123</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCardButtonWrapper>
        <S.AddToCardButton>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCardButton>
      </S.AddToCardButtonWrapper>
    </S.Card>
  );
};
