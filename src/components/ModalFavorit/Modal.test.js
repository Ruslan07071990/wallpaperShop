import { render } from "@testing-library/react";
import ModalFavorit from './ModalFavorit'
import { Provider, useDispatch } from "react-redux";
import store from "../../redux/store";
import { useEffect } from "react";
import { setModal } from "../../redux/modal/actionCreators";

const Dispatcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModal(true));
  }, []);

  return <button onClick={() => dispatch(setModal(true))}>OPEN MODAL</button>;
};

const Component = (props) => {
  return (
    <Provider store={store}>
      <Dispatcher />
      <ModalFavorit />
    </Provider>
  );
};

describe("Snapshot test", () => {
  test("should Modal render", () => {
    const { asFragment } = render(<Component />);

    expect(asFragment()).toMatchSnapshot();
  });
});
