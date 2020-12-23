import * as React from "react";

import styles from "./ResultPanelHeader.module.scss";

export const ResultPanelHeader: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.resultsHeader}>
            <div className={styles.headerContent}>
                <span className={styles.contentCategory}>People Directory</span>
                <label className={styles.contentTypeLabel}>People</label>
                <select>
                    <option value="1">People</option>
                </select>
            </div>
        </div>
    );
};
