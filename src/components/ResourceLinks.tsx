import * as React from "react";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

import {
    usePolicyLinks,
    useFormLinks,
    useResourceLinks
} from "../hooks/useResourceLinks";
import styles from "./ResourceLinks.module.scss";

export interface IResourceLinksProps {
    context: ApplicationCustomizerContext;
}

export const ResourceLinks: React.FC<IResourceLinksProps> = (
    props: IResourceLinksProps
) => {
    const { context } = props;
    const { data: policyLinks } = usePolicyLinks(context);
    const { data: formLinks } = useFormLinks(context);
    const { data: resourceLinks } = useResourceLinks(context);
    return (
        <div className={styles.container}>
            <div className={styles.categoryContainer}>
                <div className={styles.categoryHeading}>Policies</div>
                {policyLinks &&
                    policyLinks.length > 0 &&
                    policyLinks.map((link) => (
                        <div className={styles.categoryItem}>
                            <div></div>
                            <div className={styles.categoryItem}>
                                <a href={link.url}>{link.title}</a>
                            </div>
                        </div>
                    ))}
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.categoryHeading}>Forms</div>
                {formLinks &&
                    formLinks.length > 0 &&
                    formLinks.map((link) => (
                        <div className={styles.categoryItem}>
                            <div></div>
                            <div className={styles.categoryItem}>
                                <a href={link.url}>{link.title}</a>
                            </div>
                        </div>
                    ))}
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.categoryHeading}>Resources</div>
                {resourceLinks &&
                    resourceLinks.length > 0 &&
                    resourceLinks.map((link) => (
                        <div className={styles.categoryItem}>
                            <div></div>
                            <div className={styles.categoryItem}>
                                <a href={link.url}>{link.title}</a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
