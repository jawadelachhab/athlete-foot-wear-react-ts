import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { Container, Breadcrumb } from "@components/ui";
import useWishlist from "@hooks/useWishlist";
import { TProduct } from "@types";
import { GridList } from "@components/common";

const Wishlist = () => {
  const { loading, error, records } = useWishlist();

  return (
    <>
      <Breadcrumb title="Wishlist" />
      <Container className="my-24">
        <Loading status={loading} error={error}>
          <GridList<TProduct>
            emptyMessage="There are no products"
            records={records}
            renderItem={(record) => <Product {...record} />}
            className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          />
        </Loading>
      </Container>
    </>
  );
};

export default Wishlist;
