import React from "react";
import { changeFavourite } from "../../redux/favourite/actionCreators";
import { ReactComponent as StarIcon } from "./svg/StarIcon.svg";
import { ReactComponent as StarIconOutline } from "./svg/StarIconOutline.svg";
import styles from "./Item.module.scss";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { addToCart } from "../../redux/cart/actionCreators";
import {
  setModal,
  setModalAction,
  setModalTitle,
  setProductName,
  setProductPrice,
} from "../../redux/modal/actionCreators";
import classNames from "classnames";
import ViewContext from "../../context";
import { useContext } from "react";

const Item = (props) => {
  const { id, name, price, image, count } = props;
  const { view } = useContext(ViewContext);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };
  const handleAddToCart = () => {
    dispatch(
      setModalAction(
        <Button
          onClick={() => {
            dispatch(addToCart({ name, price, image, id }));
            toggleModal();
          }}
          text="Додати в кошик"
        />
      )
    );
    dispatch(setModalTitle("Додати товар в Кошик?"));

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
      className={classNames(styles.productCard,{
        [styles.productCard]: view === "viewCards",
        [styles.productList]: view === "viewList",
      })}>
        <img className={styles.imageWrapper} src={`./img/${image}`} alt="" />

        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.count}> Кількість {count}</p>

        <div className={styles.cardFooter}>
          <button className={styles.addFavorite} onClick={changeFavourites}>
            {isFavorited ? <StarIconOutline /> : <StarIcon data-testid ="starIcon" />}
          </button>

          <p className={styles.productPrice}>{price} грн</p>
        </div>

        <button className={styles.addtoCart} onClick={handleAddToCart}>
          <span>Додати до Кошика</span>
        </button>
      </div>
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  count: PropTypes.number,
  id: PropTypes.number,
};

Item.defaultProps = {
  name: "",
  price: "",
  image: "",
  count: '',
  id: '',
};

export default Item;
