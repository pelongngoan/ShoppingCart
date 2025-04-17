import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { Container } from "../ui-common/Container";
import { ProductCard } from "./ProductCard";

export const ProductsList = () => {
  const { products } = useSelector((state: RootState) => state.products);
  return (
    <Container className="grid grid-cols-1 gap-5 rounded-lg max-w-2xl min-w-3xs">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </Container>
  );
};
