import * as React from "react";
import { config } from "../config";
import { IClient } from "../models/IClient";
import { IMatter } from "../models/IMatter";
import { HeaderContext } from "../HeaderContext";
import styles from "./ResultsNavPanel.module.scss";

export interface IResultsNavPanelProps {
    clientResults: IClient[];
    matterResults: IMatter[];
}

export const ResultsNavPanel: React.FC<IResultsNavPanelProps> = (
    props: IResultsNavPanelProps
) => {
    const { clientResults, matterResults } = props;

    return (
        <HeaderContext.Consumer>
            {({ appContext }) => (
                <div className={styles.resultNavPanel}>
                    <div className={styles.navSection}>
                        <div className={styles.navSectionHeader}>
                            Continue Searching in:
                        </div>
                        <div className={styles.navSectionMain}>
                            <div className={styles.buttonContainer}>
                                <button
                                    type="button"
                                    className={styles.resultsNavButton}
                                >
                                    People Directory
                                </button>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button
                                    type="button"
                                    className={styles.resultsNavButton}
                                >
                                    Intranet Content
                                </button>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button
                                    type="button"
                                    className={styles.resultsNavButton}
                                >
                                    Clients
                                </button>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button
                                    type="button"
                                    className={styles.resultsNavButton}
                                >
                                    Matters
                                </button>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button
                                    type="button"
                                    className={styles.resultsNavButton}
                                >
                                    Documents
                                </button>
                            </div>
                            <div className={styles.buttonContainer}>
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
                        <div className={styles.navSectionHeader}>
                            Client Lookup:
                        </div>
                        <div className={styles.navSectionMain}>
                            {clientResults && clientResults.length > 0 ? (
                                clientResults.map((client) => (
                                    <a
                                        href={`${appContext.pageContext.web.serverRelativeUrl}${config.clientWebRelativeUrl}?id=${client.clientNumber}`}
                                        target="_blank"
                                    >
                                        <div className={styles.resultText}>
                                            <span>{`${client.clientName} (${client.clientNumber})`}</span>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <div>No Data</div>
                            )}
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
                        <div className={styles.navSectionHeader}>
                            Matter Lookup:
                        </div>
                        <div className={styles.navSectionMain}>
                            {matterResults && matterResults.length > 0 ? (
                                matterResults.map((matter) => (
                                    <a
                                        href={`${appContext.pageContext.web.serverRelativeUrl}${config.matterWebRelativeUrl}?id=${matter.matterNumber}`}
                                        target="_blank"
                                    >
                                        <div className={styles.resultText}>
                                            <span>{`${matter.matterName} (${matter.matterNumber})`}</span>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <div>No Data</div>
                            )}
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
            )}
        </HeaderContext.Consumer>
    );
};
