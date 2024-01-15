import { CART_LS_KEY } from "../../components/constants";



export const FORM_CHEC = "FORM_CHEC";


const initialValue = {
  isVisibleMessage: false,
};

const formBuyChecReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FORM_CHEC: {

      localStorage.removeItem(CART_LS_KEY);
      // window.location.reload()


      return { ...state, isVisibleMessage: action.payload };
    }
    default:
      return state;
  }
};
export default formBuyChecReducer