import { hot } from "react-hot-loader/root";
import React from "react";

import { Loader } from "@components/loader";
import styles from "./master.scss";

const Master: React.FC = () => {
    return (
        <div className={styles.master}>
            <Loader />
        </div>
    );
};

export default hot(Master);
