import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

import { HeaderContext } from "./HeaderContext";
import GuidedSearch from "./components/GuidedSearch";
import { Weather } from "./components/Weather";

import styles from "./HeaderApp.module.scss";
import { SocialMedia } from "./components/SocialMedia";
import { SPShareFeatures } from "./components/SPShareFeatures";
import { UrgentAnnouncement } from "./components/UrgentAnnouncement";

export interface IHeaderAppProps {
    context: ApplicationCustomizerContext;
    showResourceAndForms: boolean;
}

export interface IHeaderAppState {}

const queryClient = new QueryClient({
    defaultOptions: {}
});
const HeaderApp: React.FC<IHeaderAppProps> = (props: IHeaderAppProps) => {
    const { context, showResourceAndForms } = props;

    console.log(`Show Resources = ${showResourceAndForms}`);

    return (
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
    );
};

export default HeaderApp;