import * as React from "react";

import styles from "./UrgentAnnouncement.module.scss";

export interface IUrgentAnnouncementProps
{
  onHeaderClick: () => void;
}

export const UrgentAnnouncement: React.FC<
IUrgentAnnouncementProps
> = (props: IUrgentAnnouncementProps): React.ReactElement<IUrgentAnnouncementProps> => {
  const {onHeaderClick} = props;

  const handleClick = (
    evt: React.MouseEvent<HTMLDivElement>
) => {
    onHeaderClick();
};

    return (
        <div className={styles.container} onClick={handleClick}>
            <p>URGENT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa</p>
        </div>
    );
};
