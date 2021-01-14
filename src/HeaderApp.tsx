import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

import {HeaderContext} from './HeaderContext';
import GuidedSearch from "./components/GuidedSearch";
import { Weather } from "./components/Weather";

import styles from "./HeaderApp.module.scss";
import { SocialMedia } from "./components/SocialMedia";
import { SPShareFeatures } from "./components/SPShareFeatures";

export interface IHeaderAppProps {
    context: ApplicationCustomizerContext;
}

export interface IHeaderAppState {}

const queryClient = new QueryClient({
    defaultOptions: {}
});

export default class HeaderApp extends React.Component<
    IHeaderAppProps,
    IHeaderAppState
> {
    constructor(props: IHeaderAppProps) {
        super(props);
        this.state = {};
    }

    public render(): React.ReactElement<IHeaderAppProps> {
        return (
            <div className={styles.headerContainer}>
                <QueryClientProvider client={queryClient}>
                    <HeaderContext.Provider
                        value={{ appContext: this.props.context }}
                    >
                        <GuidedSearch
                            initialText="search people, clients, matters, and documents..."
                            context={this.props.context}
                        />
                        <Weather />
                        <SocialMedia />
                        <SPShareFeatures />
                    </HeaderContext.Provider>
                </QueryClientProvider>
            </div>
        );
    }
}
