import React from "react";

import Item from "../../components/Item/Item";
import styles from "../../components/ItemsContainer/ItemsContainer.module.scss";
import { useContext } from "react";
import ViewContext from "../../context";
import classNames from "classnames";
import { useSelector, shallowEqual } from "react-redux";

const FavoritsPage = () => {
  const { view } = useContext(ViewContext);
  const favorites = useSelector((state) => state.favourite.cards, shallowEqual);
  const firstModalOpen = useSelector((state) => state.modal.isActive);
  return (
    <div className="container">
      <div className={classNames(styles.productCards,{
          
          [styles.productCards]: view === "viewCards",
          [styles.productLists]: view === "viewList",
        })}>
        {favorites &&
          favorites.map(({ id, name, price, image }) => (
            <Item key={id} name={name} price={price} image={image} id={id} />
          ))}
      </div>
    </div>
  );
};
export default FavoritsPage;
