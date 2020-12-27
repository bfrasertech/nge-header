
import { AadHttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IClient } from '../models/IClient';
import { config } from '../config';

export const searchClients = async (searchTerm: string, context: ApplicationCustomizerContext): Promise<IClient[]> => {

  return context.aadHttpClientFactory.getClient(config.apiClientId).then((aadClient: AadHttpClient) => {
    const options: IHttpClientOptions = {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({ searchTerm: searchTerm, maxResults: config.maxClientResults })
    };

    const uri = `${config.baseApiEndpoint}/api/client/search`;

    return aadClient.post(uri, AadHttpClient.configurations.v1, options);
  }).then(async (response: HttpClientResponse): Promise<IClient[]> => {
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
