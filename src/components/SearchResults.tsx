import * as React from "react";

import { IDocument } from "../models/IDocument";
import { IPerson } from "../models/IPerson";
import { IIntranetResult } from "../models/IIntranetResult";
import { IClient } from "../models/IClient";
import { IMatter } from "../models/IMatter";

import { ResultsNavPanel } from "./ResultsNavPanel";
import { ResultPanelHeader } from "./ResultPanelHeader";
import { PeopleResults } from "./PeopleResults";
import { DocumentResults } from "./DocumentResults";
import { IntranetResults } from "./IntranetResults";
import { config } from "../config";

import styles from "./SearchResults.module.scss";

export interface ISearchResultsProps {
    peopleResults: IPerson[];
    documentResults: IDocument[];
    intranetResults: IIntranetResult[];
    clientResults: IClient[];
    matterResults: IMatter[];
    webServerRelativeUrl: string;
    currentSearchTerm: string;
}

const SearchResults: React.FC<ISearchResultsProps> = (
    props: ISearchResultsProps
) => {
    const {
        peopleResults,
        documentResults,
        intranetResults,
        clientResults,
        matterResults,
        webServerRelativeUrl,
        currentSearchTerm
    } = props;

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
                                    <a
                                        href={`${webServerRelativeUrl}${config.advancedSearchWebRelativeUrl}?tab=people&k=${currentSearchTerm}`}
                                        target="_blank"
                                    >
                                        <button
                                            type="button"
                                            className={styles.viewMoreButton}
                                        >
                                            <span>View more</span>
                                        </button>
                                    </a>
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
                                {documentResults &&
                                documentResults.length > 0 ? (
                                    <>
                                        <DocumentResults
                                            results={documentResults}
                                        />
                                        <div
                                            className={
                                                styles.viewMoreButtonContainer
                                            }
                                        >
                                            <button
                                                type="button"
                                                className={
                                                    styles.viewMoreButton
                                                }
                                            >
                                                <span>View more</span>
                                            </button>
                                        </div>
                                        <div
                                            className={
                                                styles.mainResultSectionDivider
                                            }
                                        >
                                            <hr />
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.mainResultSection}>
                            <div className={styles.mainResultSectionContent}>
                                {intranetResults &&
                                intranetResults.length > 0 ? (
                                    <>
                                        <IntranetResults
                                            results={intranetResults}
                                        />
                                        <div
                                            className={
                                                styles.viewMoreButtonContainer
                                            }
                                        >
                                            <a
                                                href={`${webServerRelativeUrl}${config.advancedSearchWebRelativeUrl}?tab=intranet&k=${currentSearchTerm}`}
                                                target="_blank"
                                            >
                                                <button
                                                    type="button"
                                                    className={
                                                        styles.viewMoreButton
                                                    }
                                                >
                                                    <span>View more</span>
                                                </button>
                                            </a>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <ResultsNavPanel
                        clientResults={clientResults}
                        matterResults={matterResults}
                        currentSearchTerm={currentSearchTerm}
                    />
                </div>
            </div>
        </div>
    );
};
export default SearchResults;
