import React from "react";
import styles from "./ModalFavorit.module.scss";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../redux/modal/actionCreators";

const ModalFavorite = ({ closeButton }) => {
  const btnConfirm = useSelector((state) => state.modal.modalAction);
  const productName = useSelector((state) => state.modal.name);
  const productPrice = useSelector((state) => state.modal.price);
  const titleModal = useSelector((state) => state.modal.title);

  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };
  const fonnClick = (event) => {
    // Перевіряємо, чи клік був здійснений за межами модального вікна
    if (event.currentTarget === event.target) {
      //Якщо так, то додаємо код для закриття модального вікна
      toggleModal();
    }
  };
  return (
    <div className={styles.modalWrapper} onClick={fonnClick}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2>{titleModal}</h2>

            {closeButton && (
              <span className={styles.modalClose} onClick={toggleModal}>
                &times;
              </span>
            )}
          </div>
          <div>
            <p className={styles.bodyText}></p>
            <span className={styles.modalActions}>
              {productName} - {productPrice} грн
            </span>
          </div>
          <div className={styles.modalActions}>{btnConfirm}</div>
        </div>
      </div>
    </div>
  );
};
ModalFavorite.defaultProps = {
  closeButton: true,
};

ModalFavorite.propTypec = {
  closeModal: PropTypes.bool,
};
export default ModalFavorite;
