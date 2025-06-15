import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { Container } from "@components/ui";
import useProducts from "@hooks/useProducts";
import { TProduct } from "@types";
import { GridList } from "@components/common";

const BestSeller = () => {
  const { loading, error, productsFullInfo } = useProducts(8);

  return (
    <Container className="my-8 md:my-16">
      <h2 className="text-3xl font-bold capitalize  text-center mb-8 ">
        Best Seller
      </h2>
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no products"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
          className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        />
      </Loading>
    </Container>
  );
};

export default BestSeller;
