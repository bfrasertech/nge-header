import * as React from "react";
import { IDocument } from "../models/IDocument";

import { IPerson } from "../models/IPerson";

import { IntranetResultItem } from "./IntranetResultItem";
import { ResultsNavPanel } from "./ResultsNavPanel";
import { ResultPanelHeader } from "./ResultPanelHeader";
import { PeopleResults } from "./PeopleResults";
import { DocumentResults } from "./DocumentResults";

import styles from "./SearchResults.module.scss";
import { IIntranetResult } from "../models/IIntranetResult";

export interface ISearchResultsProps {
    peopleResults: IPerson[];
    documentResults: IDocument[];
    intranetResults: IIntranetResult[];
}

const SearchResults: React.FC<ISearchResultsProps> = (
    props: ISearchResultsProps
) => {
    const { peopleResults, documentResults, intranetResults } = props;

    return (
        <div className={styles.container}>
            <div>
                <ResultPanelHeader />
                <div className={styles.resultsContainer}>
                    <div className={styles.mainResultPanel}>
                        <div className={styles.mainResultSection}>
                            <div className={styles.mainResultSectionContent}>
                                <PeopleResults results={peopleResults} />
                                <div className={styles.viewMoreButtonContainer}>
                                    <button
                                        type="button"
                                        className={styles.viewMoreButton}
                                    >
                                        <span>View more</span>
                                    </button>
                                </div>
                                <div
                                    className={styles.mainResultSectionDivider}
                                >
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className={styles.mainResultSection}>
                            <div className={styles.mainResultSectionContent}>
                                <DocumentResults results={documentResults} />
                                <div className={styles.viewMoreButtonContainer}>
                                    <button
                                        type="button"
                                        className={styles.viewMoreButton}
                                    >
                                        <span>View more</span>
                                    </button>
                                </div>
                                <div
                                    className={styles.mainResultSectionDivider}
                                >
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className={styles.mainResultSection}>
                            <div className={styles.innerContainer}>
                                <div>
                                    <span>Intranet Results</span>
                                </div>
                                {intranetResults &&
                                intranetResults.length > 0 ? (
                                    intranetResults.map((intranetResult) => (
                                        <IntranetResultItem
                                            intranetResult={intranetResult}
                                        />
                                    ))
                                ) : (
                                    <div>No Results</div>
                                )}
                            </div>
                            <div className={styles.viewMoreButtonContainer}>
                                <div>
                                    <button
                                        type="button"
                                        className={styles.viewMoreButton}
                                    >
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ResultsNavPanel />
                </div>
            </div>
        </div>
    );
};
export default SearchResults;
