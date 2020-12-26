import * as React from "react";

import { IDocument } from "../models/IDocument";
import { DocumentResultItem } from "./DocumentResultItem";

import styles from "./DocumentResults.module.scss";

export interface IDocumentResultsProps {
    results: IDocument[];
}

export const DocumentResults: React.FC<IDocumentResultsProps> = (
    props: IDocumentResultsProps
): React.ReactElement<IDocumentResultsProps> => {
    const { results } = props;
    return (
        <div>
            <div className={styles.header}>
                <span>Document Results</span>
            </div>
            {results && results.length > 0 ? (
                results.map((document: IDocument) => (
                    <DocumentResultItem document={document} />
                ))
            ) : (
                <div>No Results</div>
            )}
        </div>
    );
};
