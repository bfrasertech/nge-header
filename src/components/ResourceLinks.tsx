import * as React from "react";

import styles from "./ResourceLinks.module.scss";

export const ResourceLinks: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <div className={styles.categoryContainer}>
                <div className={styles.categoryHeading}>Policies</div>
                <div className={styles.categoryItem}>
                    <div></div>
                    <div className={styles.categoryItem}>Item</div>
                </div>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.categoryHeading}>Forms</div>
                <div className={styles.categoryItem}>
                    <div></div>
                    <div className={styles.categoryItem}>Item</div>
                </div>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.categoryHeading}>Resources</div>
                <div className={styles.categoryItem}>
                    <div></div>
                    <div className={styles.categoryItem}>Item</div>
                </div>
            </div>
        </div>
    );
};
