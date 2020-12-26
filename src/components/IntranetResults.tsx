import * as React from "react";

import { IIntranetResult } from "../models/IIntranetResult";
import { IntranetResultItem } from "./IntranetResultItem";

import styles from "./IntranetResults.module.scss";

export interface IIntranetResultsProps {
    results: IIntranetResult[];
}

export const IntranetResults: React.FC<IIntranetResultsProps> = (
    props: IIntranetResultsProps
): React.ReactElement<IIntranetResultsProps> => {
    const { results } = props;
    return (
        <div>
            <div className={styles.header}>
                <span>Intranet Results</span>
            </div>
            {results && results.length > 0 ? (
                results.map((intranetResult) => (
                    <IntranetResultItem intranetResult={intranetResult} />
                ))
            ) : (
                <div>No Results</div>
            )}
        </div>
    );
};
