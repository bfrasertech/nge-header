import * as React from "react";

import styles from "./Weather.module.scss";

export const Weather: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <span className={styles.today}>Today</span>
                <span className={styles.weatherIcon}>icon</span>
                <span className={styles.temps}>50/32</span>
            </div>
        </div>
    );
};
