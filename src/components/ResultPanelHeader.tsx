import * as React from "react";

import styles from "./ResultPanelHeader.module.scss";

export const ResultPanelHeader: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>People Directory</span>
                </div>
                <div className={styles.dropdownContainer}>
                    <label>Default Search</label>
                    <select>
                        <option value="1">People</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
