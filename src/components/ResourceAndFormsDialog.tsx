import * as React from "react";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

import { NgeMyTools, ToolService } from "nge-my-tools";
import * as common from 'nge-library';
//import { ToolService } from nge';

import styles from "./ResourceAndFormsDialog.module.scss";
import { ResourceLinks } from "./ResourceLinks";

export interface IResourceAndFormsProps {
    context: ApplicationCustomizerContext;
}

export const ResourceAndFormsDialog: React.FC<IResourceAndFormsProps> = (props: IResourceAndFormsProps): React.ReactElement<
    Record<string, unknown>
> => {

    const {context} = props;
    const ngeLibrary = new common.NgeLibrary();
    const toolService = new ToolService(context);

    return (
        <div className={styles.container}>
            <NgeMyTools
                theme="light"
                columns={4}
                rows={4}
                context={context}
                ngeLibrary={ngeLibrary}
                toolService={toolService}
            />
            <ResourceLinks />
        </div>
    );
};
