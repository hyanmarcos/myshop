import styled from "styled-components";

export const Card = styled.article`
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin: 1rem 0;

  min-height: 3rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

export const Review = styled.span`
  display: flex;
  font-size: 1rem;
  align-items: center;
`;

export const Price = styled.strong``;

export const AddToCardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  margin-top: 1rem;
`;

export const AddToCardButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: blue;
  color: white;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  svg {
    font-size: 1rem;
  }
`;
