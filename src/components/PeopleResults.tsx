import * as React from "react";

import { IPerson } from "../models/IPerson";
import { PersonCard } from "./PersonCard";

import styles from "./PeopleResults.module.scss";

export interface IPeopleResultsProps {
    results: IPerson[];
}

export const PeopleResults: React.FC<IPeopleResultsProps> = (
    props: IPeopleResultsProps
): React.ReactElement<IPeopleResultsProps> => {
    const { results } = props;
    return (
        <div>
            {results && results.length > 0 ? (
                <div className={styles.container}>
                    {results.map((person: IPerson) => {
                        return <PersonCard person={person} />;
                    })}
                </div>
            ) : (
                <div>No results</div>
            )}
        </div>
    );
};
