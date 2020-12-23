
import { SPHttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IIntranetResult } from '../models/IIntranetResult';
import { config } from '../config';

const SEARCH_ROW_LIMIT = 20;

export const searchIntranet = async (searchTerm: string, context: ApplicationCustomizerContext): Promise<IIntranetResult[]> => {
  const searchUrl = `${context.pageContext.web.absoluteUrl}/_api/search/postquery`;

  const searchRequest: any = {
    request: {
      Querytext: searchTerm,
      ClientType: 'ContentSearchRegular',
      SelectProperties: ['Title'],
      RowLimit: SEARCH_ROW_LIMIT
    }
  };

  const options: IHttpClientOptions = {
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(searchRequest)
  };

  return context.spHttpClient.post(searchUrl, SPHttpClient.configurations.v1, options).then(async (response: HttpClientResponse): Promise<IIntranetResult[]> => {
    const data = await response.json();

    if (response.ok) {
      return data.PrimaryQueryResult.RelevantResults.Table.Rows.map((spResult) => mapSPResultToIntranetResult(spResult));
    } else {
      return Promise.reject(data);
    }
  });
};

const mapSPResultToIntranetResult = (spResult: any): IIntranetResult => {
  let result: IIntranetResult = {
    id: 0,
    description: ''
  };

  spResult.Cells.forEach(cell => {
    if (cell.Key === 'Title') {
      result.description = cell.Value;
    }

    if (cell.Key === 'ListItemID') {
      result.id = cell.Value;
    }
  });

  return result;
};
