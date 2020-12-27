
import { AadHttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IMatter } from '../models/IMatter';
import { config } from '../config';

export const searchMatters = async (searchTerm: string, context: ApplicationCustomizerContext): Promise<IMatter[]> => {

  return context.aadHttpClientFactory.getClient(config.apiClientId).then((aadClient: AadHttpClient) => {
    const options: IHttpClientOptions = {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: searchTerm, maxResults: config.maxMatterResults})
    };

    const uri = `${config.baseApiEndpoint}/api/matter/search`;

    return aadClient.post(uri, AadHttpClient.configurations.v1, options);
  }).then(async (response: HttpClientResponse): Promise<IMatter[]> => {
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
