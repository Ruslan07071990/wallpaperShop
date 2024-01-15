import { SET_CARD } from "./actions";
import axios from 'axios';



export const setCards = (cards) => ({ type: SET_CARD, payload: cards });


export const axiosCards = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('./products.json');
            dispatch(setCards(data));

        } catch (error) {
            console.log('ERROR', error);
        }
    }
}
