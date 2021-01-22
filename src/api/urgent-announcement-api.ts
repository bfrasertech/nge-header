
import { SPHttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IUrgentAlert } from '../models/IUrgentAlert';
import { config } from '../config';

export const getMostRecentUrgentAnnouncement = async (context: ApplicationCustomizerContext): Promise<IUrgentAlert> => {
  const today: Date = new Date();

  let listUrl = `${context.pageContext.site.absoluteUrl}`;
  listUrl += `/_api/web/lists('${config.urgentAlertListId}')/items?$top=1&$select=Id,Title,Body&`;
  listUrl += `$filter=(Expires ge '${today.toISOString()}')&$orderby=Modified desc`;

  return context.spHttpClient.get(listUrl, SPHttpClient.configurations.v1).then(async (response: HttpClientResponse): Promise<IUrgentAlert> => {
    const data = await response.json();

    if (response.ok && data.value && data.value.length > 0) {
      return mapSPResultToUrgentAlert(data.value[0]);
    } else {
      return Promise.reject(data);
    }
  });
};

const mapSPResultToUrgentAlert = (spResult: any): IUrgentAlert => {

  if (spResult) {
    return {
      id: spResult.Id, title: spResult.Title, body: spResult.Body
    };
  }

  return null;
};
