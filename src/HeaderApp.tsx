import * as React from 'react';
import GuidedSearch from './components/GuidedSearch';
import styles from './HeaderApp.module.scss';

export interface IHeaderAppProps{
  data: string;
}

export interface IHeaderAppState{
  data: string;
}

export default class HeaderApp extends React.Component<IHeaderAppProps, IHeaderAppState> {
  constructor(props: IHeaderAppProps){
    super(props);
    this.state = {
      data: props.data
    };
  }

  public render(): React.ReactElement<IHeaderAppProps> {
  return <div className={styles.guidedSearchContainer}><GuidedSearch initialText='search people, clients, matters, and documents...' /></div>;
  }
}