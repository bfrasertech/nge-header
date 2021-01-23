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
                        href={`${appContext.pageContext.web.serverRelativeUrl}${config.profileWebRelativeUrl}?itemid=${person.ngeEmail}`}
                        target="_self"
                    >
                        <NgePortrait
                            context={appContext}
                            loginName={person.ngeEmail}
                        />
                    </a>
                    <div className={styles.dataContainer}>
                        <div className={styles.nameAndTitleContainer}>
                            <a
                                href={`${appContext.pageContext.web.serverRelativeUrl}${config.profileWebRelativeUrl}?itemid=${person.ngeEmail}`}
                                target="_self"
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
                                <span>
                                    #
                                    {person?.ngePhone?.substring(
                                        person?.ngePhone?.length - 4
                                    )}
                                </span>
                            </div>
                            {person.ngeAssistant ? (
                                <div className={styles.assistant}>
                                    <label htmlFor="">Secretary:</label>{" "}
                                    <span className={styles.name}>
                                        {person.ngeAssistant}
                                    </span>
                                    <a
                                        href={`${appContext.pageContext.web.serverRelativeUrl}${config.profileWebRelativeUrl}?itemid=`}
                                        target="_self"
                                    >
                                        {person.ngeAssistantPhone ? (
                                            <span>{" x"}
                                                {person.ngeAssistantPhone.substring(
                                                    person.ngeAssistantPhone
                                                        ?.length - 4
                                                )}
                                            </span>
                                        ) : null}
                                    </a>
                                </div>
                            ) : null}
                            <div className={styles.office}>
                                <label>Office:</label>{" "}
                                <a
                                    href={`${appContext.pageContext.web.serverRelativeUrl}${config.floorPlanWebRelativeUrl}?itemid=${person.officeLocation}`}
                                    target="_self"
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
