import * as React from "react";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

import { useMostRecentUrgentAnnouncement } from "../hooks/useUrgentAnnouncement";
import styles from "./UrgentAnnouncement.module.scss";

export interface IUrgentAnnouncementProps {
    context: ApplicationCustomizerContext;
}

export const UrgentAnnouncement: React.FC<IUrgentAnnouncementProps> = (
    props: IUrgentAnnouncementProps
): React.ReactElement<IUrgentAnnouncementProps> => {
    const { context } = props;

    const { data: alertResult } = useMostRecentUrgentAnnouncement(context);

    const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        //  onHeaderClick();
    };

    if (alertResult) {
        return (
            <div className={styles.container} onClick={handleClick}>
                <div className={styles.innerContainer}>
                    <p
                        dangerouslySetInnerHTML={{ __html: alertResult.body }}
                    ></p>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
