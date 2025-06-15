import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatSlug,
  productsRecordsCleanUp,
} from "@store/products/productsSlice";

const useShop = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);

  useEffect(() => {
    const promise = dispatch(
       actGetProductsByCatSlug(params.cat_slug as string)
    );
    return () => {
      promise.abort();
      dispatch(productsRecordsCleanUp());
     
    };
  }, [dispatch, params]);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: wishListItemsId.includes(el.id),
  }));

  return { loading, error, productsFullInfo };
};

export default useShop;