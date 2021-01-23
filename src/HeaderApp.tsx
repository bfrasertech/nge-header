import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

import { useOutsideClick } from "./hooks/useOutsideClick";
import { HeaderContext } from "./HeaderContext";
import GuidedSearch from "./components/GuidedSearch";
import { Weather } from "./components/Weather";

import styles from "./HeaderApp.module.scss";
import { SocialMedia } from "./components/SocialMedia";
import { SPShareFeatures } from "./components/SPShareFeatures";
import { UrgentAnnouncement } from "./components/UrgentAnnouncement";
import { ResourceAndFormsDialog } from "./components/ResourceAndFormsDialog";

export interface IHeaderAppProps {
    context: ApplicationCustomizerContext;
    showResourceAndForms: boolean;
    onShowResourceAndFormsClose: () => void;
}

export interface IHeaderAppState {}

const queryClient = new QueryClient({
    defaultOptions: {}
});

const HeaderApp: React.FC<IHeaderAppProps> = (props: IHeaderAppProps) => {
    const {
        context,
        showResourceAndForms,
        onShowResourceAndFormsClose
    } = props;
    
    const resultsAndFormsDialogRef = React.useRef<HTMLDivElement>();

    useOutsideClick(resultsAndFormsDialogRef, () => {
        onShowResourceAndFormsClose();
    });

    return (
        <div>
            <div className={styles.headerContainer}>
                <QueryClientProvider client={queryClient}>
                    <HeaderContext.Provider value={{ appContext: context }}>
                        <div className={styles.guidedSearchRow}>
                            <GuidedSearch
                                initialText="search people, clients, matters, and documents..."
                                context={context}
                            />
                            <Weather />
                            <SocialMedia />
                            <SPShareFeatures />
                        </div>
                        <div className={styles.urgentAnnouncementRow}>
                            <UrgentAnnouncement context={context} />
                        </div>
                    </HeaderContext.Provider>
                </QueryClientProvider>
            </div>

            {showResourceAndForms && (
                <div ref={resultsAndFormsDialogRef}>
                    <ResourceAndFormsDialog context={context} />
                </div>
            )}
        </div>
    );
};

export default HeaderApp;
