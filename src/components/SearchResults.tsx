import * as React from "react";
import { IDocument } from "../models/IDocument";

import { IPerson } from "../models/IPerson";

import { ResultsNavPanel } from "./ResultsNavPanel";
import { ResultPanelHeader } from "./ResultPanelHeader";
import { PeopleResults } from "./PeopleResults";
import { DocumentResults } from "./DocumentResults";
import { IntranetResults } from "./IntranetResults";

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
                            <div className={styles.mainResultSectionContent}>
                                <IntranetResults results={intranetResults} />
                                <div className={styles.viewMoreButtonContainer}>
                                    <button
                                        type="button"
                                        className={styles.viewMoreButton}
                                    >
                                        <span>View more</span>
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
