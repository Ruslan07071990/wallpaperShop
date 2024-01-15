import { SET_CART, ADD_TO_CART, DELETE_FROM_CART } from "./actions";
import { CART_LS_KEY } from "../../components/constants";
import { getStateFromLocalStorage } from "../../components/utils/localStorageHelper";

export const setCart = (cards) => ({
  type: SET_CART,
  payload: cards,
});

export const addToCart = (cards) => ({
  type: ADD_TO_CART,
  payload: cards,
});

export const deleteFromCart = (cards) => ({
  type: DELETE_FROM_CART,
  payload: cards,
});

export const axiosCart = () => {
  return async (dispatch) => {
    try {
      const cartFromLs = getStateFromLocalStorage(CART_LS_KEY);

      if (cartFromLs) {
        dispatch(setCart(cartFromLs));
      }

    } catch (error) {
      console.log("ERROR", error);
    }
  };
};
