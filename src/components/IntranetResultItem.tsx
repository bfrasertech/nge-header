import * as React from "react";

import { IIntranetResult } from "../models/IIntranetResult";
import styles from "./IntranetResultItem.module.scss";

export interface IIntranetResultItemProps {
    intranetResult: IIntranetResult;
}

const formatHighlighted = (result: string): { __html: string } => {
    const highlightStartRegex = /\<c0\>/g;
    const highlightEndRegex = /\<\/c0\>/g;

    if (!result){
      return { __html: "<div></div>" };
    }

    let res = result.replace(highlightStartRegex, `<span class="${styles.highlightedContent}">`);
    res = res.replace(highlightEndRegex, '</span>');
    res = res.replace("<ddd/>", "&#8230");
    return { __html: res };
};

export const IntranetResultItem: React.FC<IIntranetResultItemProps> = (
    props: IIntranetResultItemProps
): React.ReactElement<IIntranetResultItemProps> => {
    const { intranetResult } = props;

    return (
        <div className={styles.container}>
            <div>
                <a href={`${intranetResult.path}`} target="_blank">
                    <span
                        dangerouslySetInnerHTML={formatHighlighted(
                            intranetResult.hitHighlightedSummary
                        )}
                    ></span>
                </a>
            </div>
        </div>
    );
};
