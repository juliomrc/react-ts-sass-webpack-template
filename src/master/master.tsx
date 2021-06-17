import React from "react";

import { Loader } from "@components/loader";
import styles from "./master.scss";
import ReactIcon from "@resources/icons/react.svg";

export const Master: React.FC = () => {
    return (
        <div className={styles.master}>
            <ReactIcon className={styles.icon} width={100} />
            <Loader />
        </div>
    );
};
