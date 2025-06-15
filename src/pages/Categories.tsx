import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useCategories from "@hooks/useCategories";
import { TCategory } from "@types";
import { GridList } from "@components/common";
import { Container, Breadcrumb } from "@components/ui";

const Categories = () => {
  const { loading, error, records } = useCategories();

  return (
    <>
      <Breadcrumb title="Categories" />
      <Container className="my-8 md:my-16">
        <Loading status={loading} error={error} type="category">
          <GridList<TCategory>
            emptyMessage="There are no categories"
            records={records}
            renderItem={(record) => <Category {...record} />}
            className="grid-cols-2 md:grid-cols-4 xl:grid-cols-5"
          />
        </Loading>
      </Container>
    </>
  );
};

export default Categories;
