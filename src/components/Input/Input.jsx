import React from "react";
import { useField } from "formik";
import styles from "./input.module.scss"

const Input =(props)=>{
const[fild,meta]=useField(props.name)
const{error, touched}= meta;
    return(


        <div className={styles.orderForm}>

            <input className={styles.orderFormTitle} {...fild} {...props}/>
            {touched && error && <p className={styles.error}>{ error }</p>}
        </div>
    )
}

export default Input