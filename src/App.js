import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { axiosCards } from "./redux/cards/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import AppRoutes from "./AppRoutes";
import { axiosCart } from "./redux/cart/actionCreators";
import { axiosFavourite } from "./redux/favourite/actionCreators";
import ModalFavorite from "./components/ModalFavorit/ModalFavorit";

function App() {
  const dispatch = useDispatch();
  const firstModalOpen = useSelector((state) => state.modal.isActive);
  useEffect(() => {
    dispatch(axiosCards());
    dispatch(axiosCart());
    dispatch(axiosFavourite());
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Header />
      </div>
      <AppRoutes />
      {firstModalOpen && (
        <ModalFavorite closeButton={true} active={firstModalOpen} />
      )}
    </div>
  );
}

export default App;
