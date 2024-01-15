import React from "react";
import { useContext } from "react";
import ViewContext from "../../context";
import classNames from "classnames";
import styles from "../../components/ItemsContainer/ItemsContainer.module.scss";

import { useSelector, shallowEqual } from "react-redux";

import CartItem from "../../components/CartItem/CartItem";
import FormBuy from "../../components/forms/FormBuy/FormBuy";

const CartPage = ({}) => {
  const { view } = useContext(ViewContext);
  const cartCards = useSelector((state) => state.cart.cards, shallowEqual);

  return (
    <div>
      <div className={styles.conteiner}>
        <div
          className={classNames(styles.productCards, {
            [styles.productCards]: view === "viewCards",
            [styles.productLists]: view === "viewList",
          })}
        >
          {cartCards &&
            cartCards.map(({ id, name, price, image, count }) => (
              <CartItem
                key={id}
                name={name}
                price={price}
                image={image}
                id={id}
                count={count}
              />
            ))}
        </div>
      </div>
      <FormBuy />
    </div>
  );
};
export default CartPage;
