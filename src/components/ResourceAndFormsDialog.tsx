import * as React from "react";

import styles from "./ResourceAndFormsDialog.module.scss";

export const ResourceAndFormsDialog: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            dialog component
        </div>
    );
};
