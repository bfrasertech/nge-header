import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';

import * as strings from 'NgeHeaderCustomizationApplicationCustomizerStrings';
import HeaderApp, { IHeaderAppProps } from '../../HeaderApp';

const LOG_SOURCE: string = 'NgeHeaderCustomizationApplicationCustomizer';
const MAX_POLLING_ATTEMPTS: Number = 100;

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

  private pollAttempts: number = 0;
  private stylesUpdated: boolean = false;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    const topPlaceholder: PlaceholderContent | undefined =
      this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this.handleDispose });

    if (topPlaceholder) {
      const headerAppElement: React.ReactElement<IHeaderAppProps> = React.createElement(HeaderApp);
      headerAppElement.props.context = this.context;
      ReactDOM.render(headerAppElement, topPlaceholder.domElement);
    }

    const pageModeInterval = setInterval(() => {
      this.pollAttempts += 1;
      if (this.pollAttempts >= MAX_POLLING_ATTEMPTS || (this.updateCanvasZoneStyles())) {
        clearInterval(pageModeInterval);
      }
    }, 100);

    return Promise.resolve();
  }

  private handleDispose(): void {
    console.log('dispose');
  }

  private updateCanvasZoneStyles(): boolean {
    if (this.stylesUpdated) return true;

    const canvasZones: NodeListOf<HTMLElement> = document.querySelectorAll("[data-automation-id='CanvasZone']");

    if (canvasZones.length === 2) {
      canvasZones[0].style.backgroundColor = "#53565A";
      canvasZones[1].style.backgroundColor = "#EBEBEB";
      
      const firstChildNode: Node = canvasZones[1].firstChild;
      if (firstChildNode.nodeType === Node.ELEMENT_NODE){
        (firstChildNode as HTMLElement).style.maxWidth = 'none';
      }
      this.stylesUpdated = true;
      return true;
    }
  }
}
