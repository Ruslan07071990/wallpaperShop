import cardsReducer from "./reducer";
import { SET_CARD } from "./actions";

const initialValue = {
    cards: []   
}

describe("Cards reducer tests", () => {
    test("should Cards return default value without state and action", () => {
      expect(cardsReducer(undefined, { type: undefined })).toEqual(initialValue);
    });
  
    test("should Cards add cards by SET_CARD type", () => {
      const payloadMock = [{ name: "Ford mustang", id: 3 }];
  
      expect(
        cardsReducer(undefined, { type: SET_CARD, payload: payloadMock })
      ).toEqual({
        cards: payloadMock,
      });
    });
  });
  