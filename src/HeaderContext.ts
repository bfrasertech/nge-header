import * as React from "react";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

export interface IHeaderContext {
  appContext: ApplicationCustomizerContext; 
}

export const HeaderContext = React.createContext<IHeaderContext>(null);