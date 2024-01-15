import React from "react";
import { Formik, Form } from "formik";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import styles from "./formBuy.module.scss";
import validationSchema from "./validationSchema";
import { useSelector, useDispatch } from "react-redux";
import { formBuyChec } from "../../../redux/form/actionCreators";
import { setCart } from "../../../redux/cart/actionCreators";
const FormBuy = () => {
  const dispatch = useDispatch();

  let formCart = useSelector((state) => state.cart.cards);
  
  const initialValues = {
    name: "",
    lastName: "",
    age: "",
    address: "",
    phone: "",
  };
  const onSumbit = (value, { resetForm }) => {
    console.log({
      info: value,
      cart: formCart,
    });
    dispatch(formBuyChec());
    dispatch(setCart([]));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSumbit}
      validationSchema={validationSchema}
    >
      {({ form }) => {
        return (
          <Form>
            <div className={styles.conteiner}>
              <p className={styles.title}>Зробити замовленн'я</p>
              <Input type="text" name="name" placeholder="Name" />
              <Input type="text" name="lastName" placeholder="Last Name" />
              <Input type="number" name="age" placeholder="Age" />
              <Input type="text" name="address" placeholder="Address" />
              <Input type="number" name="phone" placeholder="Phone" />
              <Button type="submit" text="Замовити" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormBuy;
