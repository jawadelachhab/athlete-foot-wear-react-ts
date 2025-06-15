import useOrders from "@hooks/useOrders";
import { Button, Modal } from "@components/ui";
import { Loading } from "@components/feedback";
const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  } = useOrders();

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={closeModalHandler}
        title="Products Details"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center">
            <thead>
              <tr className="uppercase border">
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedProduct.map(({ image, title, price }, index) => (
                <tr key={index} className="border">
                  <td className="px-6 py-3">
                    <img src={image} alt={title} className="max-w-24" />
                  </td>
                  <td className="px-6 py-3">{title}</td>
                  <td className="px-6 py-3">{price} EGP</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>

      <Loading status={loading} error={error} type="table">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center">
            <thead>
              <tr className="uppercase border">
                <th className="px-6 py-3">Order Number</th>
                <th className="px-6 py-3">Items</th>
                <th className="px-6 py-3">Total Price</th>
                <th className="px-6 py-3">#</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((el) => (
                <tr key={el.id} className="border">
                  <td className="px-6 py-3">#{el.id}</td>
                  <td className="px-6 py-3">{el.items.length} item(s)</td>
                  <td className="px-6 py-3">{el.subtotal.toFixed(2)}</td>
                  <td className="px-6 py-3">
                    <Button
                      variant="dark"
                      onClick={() => viewDetailsHandler(el.id)}
                    >
                      Product Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Loading>
    </>
  );
};

export default Orders;
