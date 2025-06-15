
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, productsRecordsCleanUp } from "@store/products/productsSlice";



const useProducts = (limit:number) => {


  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
  useEffect(() => {
    const promise  =dispatch(actGetProducts(limit));

    return () => {
      promise.abort();
      dispatch(productsRecordsCleanUp());
    };
  }, []);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: wishListItemsId.includes(el.id),
    isAuthenticated: userAccessToken ? true : false,
  }));


  return {
    loading, error, productsFullInfo
  }
}

export default useProducts