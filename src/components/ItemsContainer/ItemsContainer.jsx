import React from "react";
import Item from "../Item/Item";
import styles from "./ItemsContainer.module.scss";
import { useSelector, shallowEqual } from "react-redux";
import classNames from "classnames";
import { useContext } from "react";
import ViewContext from "../../context";

const ItemsContainer = () => {
  const cartCards = useSelector((state) => state.cards.cards, shallowEqual);
  const { view } = useContext(ViewContext);
  // styles.productList
  return (
    <div className={styles.conteiner}>
      <div 
        
        className={classNames(styles.productCards,{
          
          [styles.productCards]: view === "viewCards",
          [styles.productLists]: view === "viewList",
        })}
      >
        {cartCards &&
          cartCards.map(({ id, name, price, image, setBtnTitle }) => (
            <Item
              key={id}
              name={name}
              price={price}
              image={image}
              id={id}
              setBtnTitle="Додати до кошика"
            />
          ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
