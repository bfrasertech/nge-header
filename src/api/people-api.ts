
import { AadHttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IPerson } from '../models/IPerson';

export const searchPeople = async (searchTerm: string, context: ApplicationCustomizerContext): Promise<IPerson[]> => {
  
  return context.aadHttpClientFactory.getClient('68183d97-02fe-4d25-a830-fc87890bbba5').then((aadClient: AadHttpClient) => {
    const options: IHttpClientOptions = {
      headers:{
          'content-type': 'application/json',
          'accept': 'application/json'
      },
      body: null
  };

  const uri = 'https://ngeaccess.azurewebsites.net/api/people/directory';

  return aadClient.post(uri, AadHttpClient.configurations.v1, options);
  }).then(async (response: HttpClientResponse): Promise<IPerson[]> => {
    const data = await response.json();

    if (response.ok){
      return data;
    } else{
      return Promise.reject(data);
    }
  });
};