// import CartItem from "./CartItem";
// import { render } from "@testing-library/react";
// import { Provider, useDispatch } from "react-redux";
// import { store } from "../../redux/store";
// import { useEffect } from "react";
// import { setModal } from "../../redux/modal/actionCreators";

// const Dispatcher = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//       dispatch(setModal(true));
//     }, []);

//     return <button onClick={() => dispatch(setModal(true))}>OPEN MODAL</button>;
//   };

// const Component = (props) => {
//   return (
//     <Provider store={store}>
//       {/* <Dispatcher /> */}
//       <CartItem />
//     </Provider>
//   );
// };

// describe("Snapshot test", () => {
//   test("should Item render", () => {
//     const { asFragment } = render(<Component />);

//     expect(asFragment()).toMatchSnapshot();
//   });
// });
