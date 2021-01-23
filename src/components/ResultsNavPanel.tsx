import * as React from "react";
import { config } from "../config";
import { IClient } from "../models/IClient";
import { IMatter } from "../models/IMatter";
import { HeaderContext } from "../HeaderContext";
import styles from "./ResultsNavPanel.module.scss";

export interface IResultsNavPanelProps {
    clientResults: IClient[];
    matterResults: IMatter[];
    currentSearchTerm: string;
}

export const ResultsNavPanel: React.FC<IResultsNavPanelProps> = (
    props: IResultsNavPanelProps
) => {
    const { clientResults, matterResults, currentSearchTerm } = props;

    const buildMatterSearchQuery = (): string => {
      const digitOnlyRegex = /^\d*$/;
      const fiveNRegex = /^\d{}5n$/;
      if (digitOnlyRegex.test(currentSearchTerm) || fiveNRegex.test(currentSearchTerm)){
        return `matterNumber=${currentSearchTerm}`;
      }

      return `matterName=${currentSearchTerm}`;
    };

    const buildClientSearchQuery = (): string => {
      const digitOnlyRegex = /^\d*$/;

      if (digitOnlyRegex.test(currentSearchTerm)){
        return `clientNumber=${currentSearchTerm}`;
      }

      return `clientName=${currentSearchTerm}`;
    };

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
                                <a
                                    href={`${appContext.pageContext.web.serverRelativeUrl}${config.advancedSearchWebRelativeUrl}?tab=people&k=${currentSearchTerm}`}
                                    target="_self"
                                >
                                    <button
                                        type="button"
                                        className={styles.resultsNavButton}
                                    >
                                        People Directory
                                    </button>
                                </a>
                            </div>
                            <div className={styles.buttonContainer}>
                                <a
                                    href={`${appContext.pageContext.web.serverRelativeUrl}${config.advancedSearchWebRelativeUrl}?tab=intranet&k=${currentSearchTerm}`}
                                    target="_self"
                                >
                                    <button
                                        type="button"
                                        className={styles.resultsNavButton}
                                    >
                                        Intranet Content
                                    </button>
                                </a>
                            </div>
                            <div className={styles.buttonContainer}>
                                <a
                                    href={`${appContext.pageContext.web.serverRelativeUrl}${config.advancedSearchWebRelativeUrl}?tab=client&k=${currentSearchTerm}`}
                                    target="_self"
                                >
                                    <button
                                        type="button"
                                        className={styles.resultsNavButton}
                                    >
                                        Clients
                                    </button>
                                </a>
                            </div>
                            <div className={styles.buttonContainer}>
                                <a
                                    href={`${appContext.pageContext.web.serverRelativeUrl}${config.advancedSearchWebRelativeUrl}?tab=matter&k=${currentSearchTerm}`}
                                    target="_self"
                                >
                                    <button
                                        type="button"
                                        className={styles.resultsNavButton}
                                    >
                                        Matters
                                    </button>
                                </a>
                            </div>
                            <div className={styles.buttonContainer}>
                                <a href={`#`} target="_self">
                                    <button
                                        type="button"
                                        className={styles.resultsNavButton}
                                    >
                                        Documents
                                    </button>
                                </a>
                            </div>
                            <div className={styles.buttonContainer}>
                                <a href={`#`} target="_self">
                                    <button
                                        type="button"
                                        className={styles.resultsNavButton}
                                    >
                                        CRM Contacts
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className={styles.navSectionDivider}>
                            <hr />
                        </div>
                    </div>
                    <div className={styles.navSection}>
                        {clientResults && clientResults.length > 0 ? (
                            <>
                                <div className={styles.navSectionHeader}>
                                    Client Lookup:
                                </div>
                                <div className={styles.navSectionMain}>
                                    {clientResults.map((client) => (
                                        <a
                                            href={`${appContext.pageContext.web.serverRelativeUrl}${config.clientWebRelativeUrl}?itemid=${client.clientNumber}`}
                                            target="_self"
                                        >
                                            <div className={styles.resultText}>
                                                <span>{`${client.clientName} (${client.clientNumber})`}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className={styles.viewMoreButtonContainer}>
                                    <a
                                        href={`${appContext.pageContext.web.serverRelativeUrl}${config.advancedSearchWebRelativeUrl}?tab=client&${buildClientSearchQuery()}`}
                                        target="_self"
                                    >
                                        <button
                                            type="button"
                                            className={styles.viewMoreButton}
                                        >
                                            View More
                                        </button>
                                    </a>
                                </div>
                                <div className={styles.navSectionDivider}>
                                    <hr />
                                </div>
                            </>
                        ) : null}
                    </div>
                    <div className={styles.navSection}>
                        {matterResults && matterResults.length > 0 ? (
                            <>
                                <div className={styles.navSectionHeader}>
                                    Matter Lookup:
                                </div>
                                <div className={styles.navSectionMain}>
                                    {matterResults.map((matter) => (
                                        <a
                                            href={`${appContext.pageContext.web.serverRelativeUrl}${config.matterWebRelativeUrl}?itemid=${matter.matterNumber}`}
                                            target="_self"
                                        >
                                            <div className={styles.resultText}>
                                                <span>{`${matter.matterDesc} (${matter.matterNumber})`}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className={styles.viewMoreButtonContainer}>
                                    <a
                                        href={`${appContext.pageContext.web.serverRelativeUrl}${config.advancedSearchWebRelativeUrl}?tab=matter&${buildMatterSearchQuery()}`}
                                        target="_self"
                                    >
                                        <button
                                            type="button"
                                            className={styles.viewMoreButton}
                                        >
                                            View More
                                        </button>
                                    </a>
                                </div>
                                <div className={styles.navSectionDivider}>
                                    <hr />
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            )}
        </HeaderContext.Consumer>
    );
};
