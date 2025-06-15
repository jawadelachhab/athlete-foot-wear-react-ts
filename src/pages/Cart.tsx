import { Container, Breadcrumb } from "@components/ui";
import { Loading, LottieHandler } from "@components/feedback";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";

import useCart from "@hooks/useCart";

const Cart = () => {
  const {
    loading,
    error,
    products,
    userAccessToken,
    placeOrderStatus,
    changeQuantityHandler,
    removeItemHandler,
  } = useCart();

  return (
    <main>
      <Breadcrumb title="Cart" />
      <Container className="my-24">
        <Loading status={loading} error={error} type="table">
          {products.length ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-center">
                <thead>
                  <tr className="uppercase border">
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Product</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <CartItemList
                    products={products}
                    changeQuantityHandler={changeQuantityHandler}
                    removeItemHandler={removeItemHandler}
                  />
                </tbody>
              </table>

              <CartSubtotalPrice
                products={products}
                userAccessToken={userAccessToken}
              />
            </div>
          ) : placeOrderStatus === "succeeded" ? (
            <LottieHandler
              message="Your order has been placed successfully"
              type="success"
            />
          ) : (
            <LottieHandler message="Your cart is empty" type="empty" />
          )}
        </Loading>
      </Container>
    </main>
  );
};

export default Cart;
