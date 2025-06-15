import { useAppDispatch } from "@store/hooks";
import { actPlaceOrder } from "@store/orders/ordersSlice";
import { clearCartAfterPlaceOrder } from "@store/cart/cartSlice";
import { useState } from "react";
import { TProduct } from "@types";
import { Button, Spinner, Modal } from "@components/ui";
type CartSubtotalPriceProps = {
  products: TProduct[];
  userAccessToken: string | null;
};

const CartSubtotalPrice = ({
  products,
  userAccessToken,
}: CartSubtotalPriceProps) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const subtotal = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);

  const modalHandler = () => {
    setShowModal(!showModal);
    setError(null);
  };

  const placeOrderHandler = () => {
    setLoading(true);
    dispatch(actPlaceOrder(subtotal))
      .unwrap()
      .then(() => {
        dispatch(clearCartAfterPlaceOrder());
        setShowModal(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Modal isOpen={showModal} onClose={modalHandler} title="Placing Order">
        <p>
          Are you sure you want to place order with Subtotal:{" "}
          {subtotal.toFixed(2)} EGP
        </p>
        {!loading && error && (
          <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
        )}
       
          <Button variant="dark" onClick={placeOrderHandler} className="mt-5">
            {loading ? (
              <>
                <Spinner></Spinner> Loading...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        
      </Modal>
      <div className="flex gap-6 justify-end items-center mt-5">
        <div className="font-semibold">Total : {subtotal.toFixed(2)}$</div>
        <div>
          {userAccessToken && (
            <Button onClick={modalHandler}>Place Order</Button>
          )}
        </div>
      </div>
    </>
  );
};

//userAccessToken
export default CartSubtotalPrice;
