import * as React from "react";

import { IDocument } from "../models/IDocument";
import styles from "./DocumentResultItem.module.scss";

export interface IDocumentResultItemProps {
    document: IDocument;
}

export const DocumentResultItem: React.FC<IDocumentResultItemProps> = (
    props: IDocumentResultItemProps
): React.ReactElement<IDocumentResultItemProps> => {
    const { document } = props;

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.linkButton}>{document.name}</span>
                <span>&nbsp;|&nbsp;</span>
                <span className={styles.linkButton}>
                    {document.firstName} / {document.lastName}
                </span>
                <span>&nbsp;|&nbsp;</span>
                <span>{`${
                    document.docDate.getMonth() + 1
                }/${document.docDate.getDate()}/${document.docDate.getFullYear()}`}</span>
            </div>
            <div>
                <span>{document.description}</span>
            </div>
        </div>
    );
};
