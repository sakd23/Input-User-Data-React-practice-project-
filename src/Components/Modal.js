import React from "react";
import Button from "./Button";
import styles from './Modal.module.css';
import Card from "./Card";

const Modal=(props)=>{
    return (
       <div>
       <div className={styles.backdrop}></div>
            <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>

            <p className={styles.content}>{props.msg}</p>

            <footer className={styles.actions}>
                <Button onAction={props.onAction}>Okay</Button>
            </footer>
           </Card>
       </div>
    )
}

export default Modal;