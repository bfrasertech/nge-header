import * as React from "react";

import styles from "./SocialMedia.module.scss";

const ngeLogo: any = require('../images/nge-logo.png');
const linkedin: any = require('../images/linkedin.png');
const twitter: any = require('../images/twitter.png');
const instagram: any = require('../images/instagram.png');

export const SocialMedia: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <span className={styles.logo}><img src={ngeLogo} alt=""/></span>
                <span className={styles.linkedin}><img src={linkedin} alt=""/></span>
                <span className={styles.twitter}><img src={twitter} alt=""/></span>
                <span className={styles.instagram}><img src={instagram} alt=""/></span>
            </div>
        </div>
    );
};
