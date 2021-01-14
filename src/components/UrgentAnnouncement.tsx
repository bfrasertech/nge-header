import * as React from "react";

import styles from "./UrgentAnnouncement.module.scss";

export const UrgentAnnouncement: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <p>URGENT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa</p>
        </div>
    );
};
