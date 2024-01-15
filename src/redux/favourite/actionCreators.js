import { SET_FAVOURITE, CHANGE_FAVOURITE } from "./actions";
import { FAV_LS_KEY } from "../../components/constants";
import { getStateFromLocalStorage } from "../../components/utils/localStorageHelper";

export const setFavourite = (cards) => ({
  type: SET_FAVOURITE,
  payload: cards,
});

export const changeFavourite = (cards) => ({
  type: CHANGE_FAVOURITE,
  payload: cards,
});

export const axiosFavourite = () => {
  return async (dispatch) => {
    try {
      const favFromLs = getStateFromLocalStorage(FAV_LS_KEY);

      if (favFromLs) {
        dispatch(setFavourite(favFromLs));
      }

    } catch (error) {
      console.log("ERROR", error);
    }
  };
};
