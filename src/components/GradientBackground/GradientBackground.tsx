import React from "react";
import styles from "./styles.module.scss";

const GradientBackground: React.FC = () => {
    return (
        <div className={styles.gradientBg}>
            <div className={styles.gradientsContainer}>
                <div className={styles.g1}></div>
                <div className={styles.g2}></div>
                <div className={styles.g3}></div>
                <div className={styles.g4}></div>
                <div className={styles.g5}></div>
            </div>
        </div>
    );
};

export default GradientBackground;
