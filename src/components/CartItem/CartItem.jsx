import React from "react";
import { changeFavourite } from "../../redux/favourite/actionCreators";
import { ReactComponent as StarIcon } from "../Item/svg/StarIcon.svg";
import { ReactComponent as StarIconOutline } from "../Item/svg/StarIconOutline.svg";
import styles from "../Item/Item.module.scss";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { deleteFromCart } from "../../redux/cart/actionCreators";
import {
  setModal,
  setModalAction,
  setModalTitle,
  setProductName,
  setProductPrice,
} from "../../redux/modal/actionCreators";
import { useContext } from "react";
import ViewContext from "../../context";
import classNames from "classnames";
const CartItem = (props) => {
  const { view } = useContext(ViewContext);
  const { id, name, price, image, count } = props;
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };
  const handleAddToCart = () => {
    dispatch(
      setModalAction(
        <Button
          onClick={() => {
            dispatch(deleteFromCart({ count, id }));
            toggleModal();
          }}
          text="Видалити"
        />
      )
    );
    dispatch(setModalTitle("Видалити?"));

    dispatch(setProductName(name));
    dispatch(setProductPrice(price));
    toggleModal();
  };
  const changeFavourites = () => {
    dispatch(changeFavourite({ name, price, image, id }));
  };
  const favourites = useSelector((state) => state.favourite.cards);
  const isFavorited = !!favourites.find((el) => el.id === id);

  return (
    <>
      <div
        className={classNames(styles.productCard, {
          [styles.productCard]: view === "viewCards",
          [styles.productList]: view === "viewList",
        })}
      >
        <img className={styles.imageWrapper} src={`./img/${image}`} alt="" />

        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.count}> Кількість {count}</p>

        <div className={styles.cardFooter}>
          <button className={styles.addFavorite} onClick={changeFavourites}>
            {isFavorited ? <StarIconOutline /> : <StarIcon />}
          </button>

          <p className={styles.productPrice}>{price} грн</p>
        </div>

        <button className={styles.addtoCart} onClick={handleAddToCart}>
          <span>Видалити</span>
        </button>
      </div>
    </>
  );
};

CartItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  count: PropTypes.number,
  id: PropTypes.number,
};

CartItem.defaultProps = {
  name: "",
  price: "",
  image: "",
  count: "",
  id: "",
};

export default CartItem;
