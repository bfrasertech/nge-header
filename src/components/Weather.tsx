import * as React from "react";

import styles from "./Weather.module.scss";

export const Weather: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <div className={styles.day}>
                <span>Today</span>
            </div>
        </div>
    );
};
