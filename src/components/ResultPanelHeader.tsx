import * as React from "react";

import styles from "./ResultPanelHeader.module.scss";

export const ResultPanelHeader: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            </div>
        </div>
    );
};
