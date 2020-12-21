import * as React from 'react';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';

import GuidedSearch from './components/GuidedSearch';

import styles from './HeaderApp.module.scss';

export interface IHeaderAppProps{
  context: ApplicationCustomizerContext;
}

export interface IHeaderAppState{

}

export default class HeaderApp extends React.Component<IHeaderAppProps, IHeaderAppState> {
  constructor(props: IHeaderAppProps){
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<IHeaderAppProps> {
  return <div className={styles.headerContainer}><GuidedSearch initialText='search people, clients, matters, and documents...' context={this.props.context} /></div>;
  }
}