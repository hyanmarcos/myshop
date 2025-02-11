import * as S from "./styles";

import { products } from "../../data/products";

import { ProductCard } from "../ProductCard/ProductCard";

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
