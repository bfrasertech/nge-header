import * as React from "react";
import styles from "./ResultsNavPanel.module.scss";

export interface IResultsNavPanelProps {}

export const ResultsNavPanel: React.FC<IResultsNavPanelProps> = (
    props: IResultsNavPanelProps
) => {
    return (
        <div className={styles.resultNavPanel}>
            <div className={styles.navSection}>
                <div className={styles.navSectionHeader}>
                    Continue Searching in:
                </div>
                <div className={styles.navSectionMain}>
                    <div>
                        <button
                            type="button"
                            className={styles.resultsNavButton}
                        >
                            People Directory
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className={styles.resultsNavButton}
                        >
                            Intranet Content
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className={styles.resultsNavButton}
                        >
                            Clients
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className={styles.resultsNavButton}
                        >
                            Matters
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className={styles.resultsNavButton}
                        >
                            Documents
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className={styles.resultsNavButton}
                        >
                            CRM Contacts
                        </button>
                    </div>
                </div>
                <div className={styles.navSectionDivider}>
                    <hr />
                </div>
            </div>
            <div className={styles.navSection}>
                <div className={styles.navSectionHeader}>Client Lookup:</div>
                <div className={styles.navSectionMain}>
                    <div className={styles.resultText}>
                        <span>Jones & Co. (1233)</span>
                    </div>
                    <div className={styles.resultText}>
                        <span>Jones & Co. (1233)</span>
                    </div>
                    <div className={styles.resultText}>
                        <span>Jones & Co. (1233)</span>
                    </div>
                    <div className={styles.resultText}>
                        <span>Jones & Co. (1233)</span>
                    </div>
                    <div className={styles.resultText}>
                        <span>Jones & Co. (1233)</span>
                    </div>
                </div>
                <div className={styles.viewMoreButtonContainer}>
                    <button
                        type="button"
                        className={styles.viewMoreButton}
                    >
                        View More
                    </button>
                </div>
                <div className={styles.navSectionDivider}>
                    <hr />
                </div>
            </div>
            <div className={styles.navSection}>
                <div className={styles.navSectionHeader}>Matter Lookup:</div>
                <div className={styles.navSectionMain}>
                    <div className={styles.resultText}>
                        <span>Smith vs. Jones (1233.0001)</span>
                    </div>
                    <div className={styles.resultText}>
                        <span>Smith vs. Jones (1233.0001)</span>
                    </div>
                    <div className={styles.resultText}>
                        <span>Smith vs. Jones (1233.0001)</span>
                    </div>
                    <div className={styles.resultText}>
                        <span>Smith vs. Jones (1233.0001)</span>
                    </div>
                    <div className={styles.resultText}>
                        <span>Smith vs. Jones (1233.0001)</span>
                    </div>
                </div>
                <div className={styles.viewMoreButtonContainer}>
                    <button
                        type="button"
                        className={styles.viewMoreButton}
                    >
                        View More
                    </button>
                </div>
                <div className={styles.navSectionDivider}>
                    <hr />
                </div>
            </div>
        </div>
    );
};
