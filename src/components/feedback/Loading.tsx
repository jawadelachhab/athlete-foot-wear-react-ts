import { TLoading } from "@types";
import React from "react";

import {
  CartSkeleton,
  CategorySkeleton,
  PostSkeleton,
  ProductSkeleton,
  TableSkeleton,
  LottieHandler,
} from ".";

const skeletonsTypes = {
  cart: CartSkeleton,
  category: CategorySkeleton,
  post: PostSkeleton,
  product: ProductSkeleton,
  table: TableSkeleton,
};

type LoadingProps = {
  status: TLoading;
  error: string | null;
  type?: keyof typeof skeletonsTypes;
  asSlide?: boolean;
  children: React.ReactNode;
};

const Loading = ({
  status,
  error,
  type = "product",

  children,
}: LoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component />;
  }

  if (status === "failed") {
    return <LottieHandler type="error" message={error as string} />;
  }

  return <>{children}</>;
};

export default Loading;
