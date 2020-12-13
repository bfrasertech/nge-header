import * as React from "react";
import { IPerson } from "../models/IPerson";
import { PersonCard } from "./PersonCard";
import { ResultsNavPanel } from "./ResultsNavPanel";

import styles from "./SearchResults.module.scss";

export interface ISearchResultsProps {}

const SearchResults: React.FC<ISearchResultsProps> = (
    props: ISearchResultsProps
) => {
    let peopleResults: IPerson[] = [];

    peopleResults.push({
        id: "1",
        name: "name",
        extension: "ext",
        title: "title",
        assistantName: "rate",
        assistantExtension: "a_ext",
        photoUrl: "photo url",
        office: "office"
    });

    peopleResults.push({
        id: "1",
        name: "name",
        extension: "ext",
        title: "title",
        assistantName: "rate",
        assistantExtension: "a_ext",
        photoUrl: "photo url",
        office: "office"
    });

    peopleResults.push({
        id: "1",
        name: "name",
        extension: "ext",
        title: "title",
        assistantName: "rate",
        assistantExtension: "a_ext",
        photoUrl: "photo url",
        office: "office"
    });

    peopleResults.push({
        id: "1",
        name: "name",
        extension: "ext",
        title: "title",
        assistantName: "rate",
        assistantExtension: "a_ext",
        photoUrl: "photo url",
        office: "office"
    });

    peopleResults.push({
        id: "1",
        name: "name",
        extension: "ext",
        title: "title",
        assistantName: "rate",
        assistantExtension: "a_ext",
        photoUrl: "photo url",
        office: "office"
    });

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
                            <div className={styles.innerContainer}>
                                {peopleResults.map((person: IPerson) => {
                                    return <PersonCard person={person} />;
                                })}
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
                                    <span>Document Results</span>
                                </div>
                                <div
                                    className={styles.mainResultSectionLineItem}
                                >
                                    <div>
                                        <span className={styles.linkButton}>
                                            Document name description
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span className={styles.linkButton}>
                                            First name / last name
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>12/22/2019</span>
                                    </div>
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
                                        <span className={styles.linkButton}>
                                            Document name description
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span className={styles.linkButton}>
                                            First name / last name
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>12/22/2019</span>
                                    </div>
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
                                        <span className={styles.linkButton}>
                                            Document name description
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span className={styles.linkButton}>
                                            First name / last name
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>12/22/2019</span>
                                    </div>
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
                                        <span className={styles.linkButton}>
                                            Document name description
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span className={styles.linkButton}>
                                            First name / last name
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>12/22/2019</span>
                                    </div>
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
                                        <span className={styles.linkButton}>
                                            Document name description
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span className={styles.linkButton}>
                                            First name / last name
                                        </span>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>12/22/2019</span>
                                    </div>
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
                                            <span className={styles.linkButton}>Lorem ipsum</span> dolor sit amet,
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
