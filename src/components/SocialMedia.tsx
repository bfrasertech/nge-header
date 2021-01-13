import * as React from "react";

import styles from "./SocialMedia.module.scss";

const ngeLogo: any = require("../images/nge-logo.png");
const linkedin: any = require("../images/linkedin.png");
const twitter: any = require("../images/twitter.png");
const instagram: any = require("../images/instagram.png");

export const SocialMedia: React.FC<
    Record<string, unknown>
> = (): React.ReactElement<Record<string, unknown>> => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <span className={styles.logo}>
                    <a href="https://www.nge.com" target="_blank">
                        <img src={ngeLogo} alt="" />
                    </a>
                </span>
                <span className={styles.linkedin}>
                    <a href="#">
                        <img src={linkedin} alt="" />
                    </a>
                </span>
                <span className={styles.twitter}>
                    <a href="#"><img src={twitter} alt="" /></a>
                </span>
                <span className={styles.instagram}>
                    <a href="#"><img src={instagram} alt="" /></a>
                </span>
            </div>
        </div>
    );
};
