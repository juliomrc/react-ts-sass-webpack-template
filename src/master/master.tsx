import { hot } from "react-hot-loader/root";
import React from "react";

import { Loader } from "@components/loader";
import styles from "./master.scss";
import ReactIcon from "@resources/icons/react.svg";

const Master: React.FC = () => {
    return (
        <div className={styles.master}>
            <ReactIcon className={styles.icon} width={50} height={50} />
            <Loader />
        </div>
    );
};

export default hot(Master);
