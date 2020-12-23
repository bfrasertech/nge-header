import * as React from "react";
import { IDocument } from "../models/IDocument";

import { IPerson } from "../models/IPerson";
import { PersonCard } from "./PersonCard";
import { DocumentResultItem } from "./DocumentResultItem";
import { ResultsNavPanel } from "./ResultsNavPanel";

import styles from "./SearchResults.module.scss";

export interface ISearchResultsProps {
    peopleResults: IPerson[];
    documentResults: IDocument[];
}

const SearchResults: React.FC<ISearchResultsProps> = (
    props: ISearchResultsProps
) => {
    const { peopleResults, documentResults } = props;

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
                                <div
                                    className={styles.mainResultSectionLineItem}
                                >
                                    <div>
                                        <span>
                                            <span className={styles.linkButton}>
                                                Lorem ipsum
                                            </span>{" "}
                                            dolor sit amet, consectetuer
                                            adipiscing elit. Maecenas porttitor
                                            congue massa. Fusce
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={styles.mainResultSectionLineItem}
                                >
                                    <div>
                                        <span>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Maecenas porttitor congue massa.
                                            Fusce
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={styles.mainResultSectionLineItem}
                                >
                                    <div>
                                        <span>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Maecenas porttitor congue massa.
                                            Fusce
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={styles.mainResultSectionLineItem}
                                >
                                    <div>
                                        <span>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Maecenas porttitor congue massa.
                                            Fusce
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={styles.mainResultSectionLineItem}
                                >
                                    <div>
                                        <span>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Maecenas porttitor congue massa.
                                            Fusce
                                        </span>
                                    </div>
                                </div>
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
