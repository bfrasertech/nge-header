import * as React from "react";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";
import { NgePortrait } from "nge-library";

import { IPerson } from "../models/IPerson";
import styles from "./PersonCard.module.scss";

const personPlaceholder: any = require("../images/person.png");

export interface IPersonCardProps {
    person: IPerson;
    context: ApplicationCustomizerContext;
}

export const PersonCard: React.FC<IPersonCardProps> = (
    props: IPersonCardProps
): React.ReactElement<IPersonCardProps> => {
    const { person, context } = props;

    return (
        <div className={styles.card}>
            <a href={`#`} target="_blank">
                <NgePortrait
                    context={context}
                    loginName={person.ngeEmail}
                />
            </a>
            <div className={styles.dataContainer}>
                <div className={styles.nameAndTitleContainer}>
                    <div>
                        <span className={styles.name}>
                            {person.displayName}
                        </span>
                    </div>
                    <div>
                        <span className={styles.title}>{person.jobTitle}</span>
                    </div>
                </div>
                <div className={styles.otherDetailsContainer}>
                    <div>
                        <label htmlFor="">Ext:</label>{" "}
                        <span className={styles.name}>{person.ngePhone}</span>
                    </div>
                    <div>
                        <label htmlFor="">Secretary:</label>{" "}
                        <span className={styles.name}>
                            {person.ngeAssistant}
                        </span>
                    </div>
                    <div>
                        <label htmlFor="">Office:</label>{" "}
                        <span className={styles.name}>
                            {person.officeLocation}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
