import * as React from "react";

import { IIntranetResult } from "../models/IIntranetResult";
import styles from "./IntranetResultItem.module.scss";

export interface IIntranetResultItemProps {
    intranetResult: IIntranetResult;
}

export const IntranetResultItem: React.FC<IIntranetResultItemProps> = (
    props: IIntranetResultItemProps
): React.ReactElement<IIntranetResultItemProps> => {
    const { intranetResult } = props;

    return (
        <div className={styles.container}>
            <div>
                <span>
                    {intranetResult.description}
                </span>
            </div>
        </div>
    );
};
