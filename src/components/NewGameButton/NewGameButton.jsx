import React from "react";
import styles from "./NewGame.module.css";

const NewGameButton = (props) => (
    <button className={`${styles.button} btn btn-default`}>
        New Game
    </button>
);

export default NewGameButton;