import Item from "./Item";
import { render } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { useEffect } from "react";
import { setModal } from "../../redux/modal/actionCreators";
import isFavorited from "./Item";

// MyComponent.test.js
import React from "react";

import { useSelector as useSelectorMock } from "react-redux";

// Mock useSelector
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const yourObject = {
  find: jest.fn().mockReturnThis(),
};

yourObject.find.mockImplementation(function () {
  return false;
});
// {
//     id: 3,
//     name: "Ford mustang",
//     price: 60900,
//     image: "3.jpg",
//     article: "1-3",
//     color: "Помаранчевий",
//     iSFavorites: false,
//   };
// Mock useContext
// jest.mock('./MyContext', () => ({
//   MyContext: {
//     Consumer: ({ children }) => children('MockContextValue'),
//   },
// }));

describe("MyComponent", () => {
  it("renders selected value and context value", () => {
    // Mock the useSelector implementation
    useSelectorMock.mockReturnValue(yourObject);

    const { getByText, getByTestId } = render(<Item />);

    expect(getByTestId("starIcon")).toBeInTheDocument();
  });
  it("should Item render", () => {
    useSelectorMock.mockReturnValue(yourObject);
    const { asFragment } = render(<Item name="Ford mustang" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
