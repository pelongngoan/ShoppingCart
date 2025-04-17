import { Container } from "../components/ui-common/Container";
import { ProductDetails } from "../components/products/ProductDetails";
import { useProducts } from "../hook/products";
import { ProductsList } from "../components/products/ProductsList";

export const Products = () => {
  useProducts();
  return (
    <Container className="grid grid-rows-12 gap-5 p-4 max-w-7xl mx-auto lg:grid-cols-12">
      <div className="row-span-12 lg:col-span-7 ">
        <ProductDetails />
      </div>
      <div className="row-span-12 lg:col-span-5 ">
        <ProductsList />
      </div>
    </Container>
  );
};
