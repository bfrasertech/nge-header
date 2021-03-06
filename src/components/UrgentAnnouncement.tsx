import * as React from "react";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";
import ReactModal from "react-modal";

import { useMostRecentUrgentAnnouncement } from "../hooks/useUrgentAnnouncement";
import styles from "./UrgentAnnouncement.module.scss";

export interface IUrgentAnnouncementProps {
    context: ApplicationCustomizerContext;
}

export const UrgentAnnouncement: React.FC<IUrgentAnnouncementProps> = (
    props: IUrgentAnnouncementProps
): React.ReactElement<IUrgentAnnouncementProps> => {
    const { context } = props;

    const { data: alertResult } = useMostRecentUrgentAnnouncement(context);

    const [
        announcementClosedDuringSession,
        setAnnouncementClosedDuringSession
    ] = React.useState(
        sessionStorage.announcementClosedDuringSession || "false"
    );

    const [showDialog, setShowDialog] = React.useState(false);

    React.useEffect(() => {
        sessionStorage.announcementClosedDuringSession = announcementClosedDuringSession;
    }, [announcementClosedDuringSession]);

    const handleOpenModal = (evt: React.MouseEvent<HTMLDivElement>) => {
        setShowDialog(true);
    };

    const handleCloseModal = (evt: React.MouseEvent<SVGSVGElement>) => {
        evt.stopPropagation();
        setShowDialog(false);
    };

    const handleClose = () => {
        setAnnouncementClosedDuringSession("true");
    };

    if (alertResult && announcementClosedDuringSession !== "true") {
        return (
            <div className={styles.container} onClick={handleOpenModal}>
                <div className={styles.innerContainer}>
                    <p
                        dangerouslySetInnerHTML={{ __html: alertResult.body }}
                    ></p>
                </div>
                <div className={styles.closeIconContainer}>
                    <svg
                        onClick={handleClose}
                        className={styles.closeIcon}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z" />
                    </svg>
                </div>
                <ReactModal
                    isOpen={showDialog}
                    contentLabel={"Urgent Announcement"}
                    className={styles.modal}
                    overlayClassName={styles.modalOverlay}
                >
                    <div className={styles.modalTitleRow}>
                        <svg
                            onClick={handleCloseModal}
                            className={styles.modalCloseIcon}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z" />
                        </svg>
                    </div>
                    <div className={styles.modalContent}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: alertResult.body
                            }}
                        ></p>
                    </div>
                </ReactModal>
            </div>
        );
    } else {
        return null;
    }
};
