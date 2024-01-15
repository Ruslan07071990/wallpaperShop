import React from "react";

import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";

import { shallowEqual, useSelector } from "react-redux";


const HomePage = () => {
  const cards = useSelector((state) => state.cards.cards, shallowEqual);
  const firstModalOpen = useSelector((state) => state.modal.isActive);
// console.log(cards);

  return (
    <>
      <ItemsContainer cards={cards}/>

    </>
  );
};


export default HomePage;
