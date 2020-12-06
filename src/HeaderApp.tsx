import * as React from 'react';

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

  componentDidMount(){

  }

  public render(): React.ReactElement<IHeaderAppProps> {
  return <div>{this.state.data + 'from react'}</div>;
  }
}