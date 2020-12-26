import * as React from "react";
import { NgePortrait } from "nge-library";

import { HeaderContext } from "../HeaderContext";
import { IPerson } from "../models/IPerson";
import { config } from "../config";
import styles from "./PersonCard.module.scss";

export interface IPersonCardProps {
    person: IPerson;
}

export const PersonCard: React.FC<IPersonCardProps> = (
    props: IPersonCardProps
): React.ReactElement<IPersonCardProps> => {
    const { person } = props;

    return (
        <HeaderContext.Consumer>
            {({ appContext }) => (
                <div className={styles.card}>
                    <a
                        href={`${appContext.pageContext.web.serverRelativeUrl}${config.profileWebRelativeUrl}?id=${person.ngeEmail}`}
                        target="_blank"
                    >
                        <NgePortrait
                            context={appContext}
                            loginName={person.ngeEmail}
                        />
                    </a>
                    <div className={styles.dataContainer}>
                        <div className={styles.nameAndTitleContainer}>
                            <a
                                href={`${appContext.pageContext.web.serverRelativeUrl}${config.profileWebRelativeUrl}?id=${person.ngeEmail}`}
                                target="_blank"
                            >
                                <div className={styles.name}>
                                    <span>{person.displayName}</span>
                                </div>
                            </a>
                            <div className={styles.jobTitle}>
                                <span>{person.jobTitle}</span>
                            </div>
                        </div>
                        <div className={styles.otherDetailsContainer}>
                            <div className={styles.phoneNumber}>
                                <label>Ext:</label>{" "}
                                <span>{person.ngePhone}</span>
                            </div>
                            <div className={styles.assistant}>
                                <label htmlFor="">Secretary:</label>{" "}
                                <span className={styles.name}>
                                    {person.ngeAssistant}
                                </span>
                                <a
                                    href={`${appContext.pageContext.web.serverRelativeUrl}${config.profileWebRelativeUrl}?id=`}
                                    target="_blank"
                                >
                                    <span>{person?.ngeAssistantPhone?.substring(person?.ngeAssistantPhone?.length - 4)}</span>
                                </a>
                            </div>
                            <div className={styles.office}>
                                <label>Office:</label>{" "}
                                <a
                                    href={`${appContext.pageContext.web.serverRelativeUrl}${config.floorPlanWebRelativeUrl}?id=${person.officeLocation}`}
                                    target="_blank"
                                >
                                    <span>{person.officeLocation}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </HeaderContext.Consumer>
    );
};
