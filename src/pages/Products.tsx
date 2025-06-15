import { Product } from "@components/eCommerce";
import { Container, Breadcrumb } from "@components/ui";
import useShop from "@hooks/useShop";
import { GridList } from "@components/common";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";

const Shop = () => {
  const { loading, error, productsFullInfo } = useShop();

  return (
    <>
      <Breadcrumb title="Products" />
      <Container className="my-8 md:my-16">
        <Loading status={loading} error={error}>
          <GridList<TProduct>
            emptyMessage="There are no products"
            records={productsFullInfo}
            renderItem={(record) => <Product {...record} />}
             className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          />
        </Loading>
      </Container>
    </>
  );
};

export default Shop;
