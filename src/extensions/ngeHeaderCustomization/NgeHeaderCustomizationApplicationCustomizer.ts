import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'NgeHeaderCustomizationApplicationCustomizerStrings';

import HeaderApp, {IHeaderAppProps} from '../../HeaderApp';

const LOG_SOURCE: string = 'NgeHeaderCustomizationApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface INgeHeaderCustomizationApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class NgeHeaderCustomizationApplicationCustomizer
  extends BaseApplicationCustomizer<INgeHeaderCustomizationApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    const topPlaceholder: PlaceholderContent | undefined =
      this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this.handleDispose });


    let message: string = this.properties.testMessage;

    if (topPlaceholder){
      const headerAppElement: React.ReactElement<IHeaderAppProps> = React.createElement(HeaderApp);
      headerAppElement.props.data = message;
      ReactDOM.render(headerAppElement, topPlaceholder.domElement);
      // topPlaceholder.domElement.textContent = message;
    }

    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    return Promise.resolve();
  }

  private handleDispose(): void {
    console.log('dispose');
  }
}
