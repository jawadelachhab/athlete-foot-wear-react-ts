import { useEffect, useState, memo } from "react";
import { TProduct } from "@types";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { Spinner, Modal } from "@components/ui";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { addToast } from "@store/toasts/toastsSlice";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  FavouriteIcon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";

const Product = memo(
  ({
    id,
    title,
    image,
    image_hover,
    price,
    quantity,
    max,
    rating,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      if (!isBtnDisabled) {
        return;
      }

      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);

      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      dispatch(addToCart(id));

      dispatch(
        addToast({
          title: "Add to Cart",
          type: "success",
          message: `${title} added to cart`,
          onCloseToast: () => {
            console.log("Success toast closed");
          },
        })
      );

      if (currentRemainingQuantity === 1) {
        dispatch(
          addToast({
            type: "warning",
            message: `You have reached the maximum quantity for ${title}`,
            delayAnimation: true,
          })
        );
      }

      setIsBtnDisabled(true);
    };

    const likeToggleHandler = () => {
      if (isAuthenticated) {
        if (!isLoading) {
          setIsLoading(true);
          dispatch(actLikeToggle(id))
            .unwrap()
            .then(() => {
              setIsLoading(false);

              if (!isLiked) {
                dispatch(
                  addToast({
                    type: "success",
                    message: `${title} added to wishlist`,
                  })
                );
              }
            })
            .catch(() => {
              setIsLoading(false);
              dispatch(
                addToast({
                  title: "Failed Operation",
                  type: "danger",
                  message: `Failed to add wishlist, error from server`,
                })
              );
            });
        }
      } else {
        setShowModal(true);
      }
    };

    return (
      <>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Login Required"
        >
          <p className="text-sm mt-2">
            You need to login first to add this item to your wishlist.
          </p>
        </Modal>

        <article className="bg-white shadow-card group">
          <div className="relative overflow-hidden">
            <div>
              <img src={image} className="w-100 block" alt={title} />
              
              <img
                src={image_hover}
                className="w-100 block opacity-0 absolute -z-10 top-0 left-0 translate-x-full duration-500 transition-all  group-hover:opacity-[1] group-hover:z-10 group-hover:translate-x-0"
                alt={`${title} hover`}
              />
              <div className="absolute top-1/2 z-20 left-0 text-center pt-0 -translate-y-1/2">
                <ul className="pl-[10px]">
                  <li className="block my-4 opacity-0 translate-x-0 translate-y-4 duration-500 transition-all group-hover:opacity-[1] group-hover:translate-x-0 group-hover:translate-y-0">
                    <button
                      className="flex justify-center items-center w-[35px] h-[35px]  rounded-full shadow bg-white duration-300 transition-all hover:bg-primary  hover:text-white"
                      disabled={isBtnDisabled || quantityReachedToMax}
                      onClick={addToCartHandler}
                      aria-label="Add to Cart"
                    >
                      {isBtnDisabled ? (
                        <>
                          <Spinner />
                        </>
                      ) : (
                        <HugeiconsIcon icon={ShoppingCart01Icon} size={18} />
                      )}
                    </button>
                  </li>
                  <li className="block my-4 opacity-0 translate-x-0 translate-y-4 duration-500 transition-all group-hover:opacity-[1] group-hover:translate-x-0 group-hover:translate-y-0">
                    <button
                      className={`flex justify-center items-center w-[35px] h-[35px]  rounded-full  shadow bg-white duration-300 transition-all hover:bg-primary hover:text-white ${
                        isLiked ? "bg-primary text-white" : ""
                      }`}
                      onClick={likeToggleHandler}
                       aria-label="Add to Wishlist"
                    >
                      {isLoading ? (
                        <Spinner />
                      ) : (
                        <HugeiconsIcon icon={FavouriteIcon} size={18} />
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium leading-7">{title}</h3>

            <p>
              {quantityReachedToMax
                ? "You reach to the limit"
                : `You can add ${currentRemainingQuantity} item(s)`}
            </p>

            <h4 className="font-semibold text-primary">${price}</h4>

            <div>
              {[...Array(rating)].map((_, index) => (
                <HugeiconsIcon
                  key={index}
                  icon={StarIcon}
                  size={14}
                  color="#000000"
                  strokeWidth={1.5}
                  className="inline-block text-warning"
                />
              ))}
              <span className="text-secondary ms-2">({rating})</span>
            </div>
          </div>
        </article>
      </>
    );
  }
);

export default Product;
