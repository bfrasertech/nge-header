import * as React from "react";

import styles from "./SPShareFeatures.module.scss";

export const SPShareFeatures: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <div
                data-automation-id="nge-sp-share"
                className={styles.innerContainer}
            ></div>
        </div>
    );
};
