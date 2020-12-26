
import { AadHttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IPerson } from '../models/IPerson';
import { config } from '../config';

export const searchPeople = async (searchTerm: string, context: ApplicationCustomizerContext): Promise<IPerson[]> => {

  return context.aadHttpClientFactory.getClient(config.apiClientId).then((aadClient: AadHttpClient) => {
    const options: IHttpClientOptions = {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: searchTerm, maxResults: config.maxPeopleResults})
    };

    const uri = `${config.baseApiEndpoint}/api/people/search`;

    return aadClient.post(uri, AadHttpClient.configurations.v1, options);
  }).then(async (response: HttpClientResponse): Promise<IPerson[]> => {
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
