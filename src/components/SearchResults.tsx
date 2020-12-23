import * as React from "react";
import { IDocument } from "../models/IDocument";

import { IPerson } from "../models/IPerson";
import { PersonCard } from "./PersonCard";
import { DocumentResultItem } from "./DocumentResultItem";
import { IntranetResultItem } from "./IntranetResultItem";
import { ResultsNavPanel } from "./ResultsNavPanel";

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
        <div className={styles.searchResultsContainer}>
            <div>
                <div className={styles.resultsHeader}>
                    <div className={styles.headerContent}>
                        <span className={styles.contentCategory}>
                            People Directory
                        </span>
                        <label className={styles.contentTypeLabel}>
                            People
                        </label>
                        <select>
                            <option value="1">People</option>
                        </select>
                    </div>
                </div>
                <div className={styles.resultsContainer}>
                    <div className={styles.mainResultPanel}>
                        <div className={styles.mainResultSection}>
                            {peopleResults && peopleResults.length > 0 ? (
                                <div className={styles.innerContainer}>
                                    {peopleResults.map((person: IPerson) => {
                                        return <PersonCard person={person} />;
                                    })}
                                </div>
                            ) : (
                                <div>No results</div>
                            )}

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
                            <div className={styles.mainResultSectionDivider}>
                                <hr />
                            </div>
                        </div>
                        <div className={styles.mainResultSection}>
                            <div className={styles.innerContainer}>
                                <div className={styles.mainResultSectionHeader}>
                                    <span>Document Results</span>
                                </div>
                                {documentResults &&
                                documentResults.length > 0 ? (
                                    documentResults.map(
                                        (document: IDocument) => (
                                            <DocumentResultItem
                                                document={document}
                                            />
                                        )
                                    )
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
                            <div className={styles.mainResultSectionDivider}>
                                <hr />
                            </div>
                        </div>
                        <div className={styles.mainResultSection}>
                            <div className={styles.innerContainer}>
                                <div className={styles.mainResultSectionHeader}>
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
