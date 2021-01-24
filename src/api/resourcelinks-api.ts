
import { SPHttpClient, HttpClientResponse } from '@microsoft/sp-http';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IResourceLink } from '../models/IResourceLink';
import { config } from '../config';

export const getPolicyLinks = async (context: ApplicationCustomizerContext): Promise<IResourceLink[]> => {

  let listUrl = `${context.pageContext.site.absoluteUrl}`;
  listUrl += `/_api/web/lists('${config.policyLinksListId}')/items?$select=Id,URL,SortOrder&`;
  listUrl += `&$orderby=SortOrder`;

  return context.spHttpClient.get(listUrl, SPHttpClient.configurations.v1).then(async (response: HttpClientResponse): Promise<IResourceLink[]> => {
    const data = await response.json();

    if (response.ok && data.value && data.value.length > 0) {
      return data.value.map((item) => mapSPResultToLinkItem(item));
    } else {
      return Promise.reject(data);
    }
  });
};

export const getFormLinks = async (context: ApplicationCustomizerContext): Promise<IResourceLink[]> => {

  let listUrl = `${context.pageContext.site.absoluteUrl}`;
  listUrl += `/_api/web/lists('${config.formLinksListId}')/items?$select=Id,URL,SortOrder&`;
  listUrl += `&$orderby=SortOrder`;

  return context.spHttpClient.get(listUrl, SPHttpClient.configurations.v1).then(async (response: HttpClientResponse): Promise<IResourceLink[]> => {
    const data = await response.json();

    if (response.ok && data.value && data.value.length > 0) {
      return data.value.map((item) => mapSPResultToLinkItem(item));
    } else {
      return Promise.reject(data);
    }
  });
};

export const getResourceLinks = async (context: ApplicationCustomizerContext): Promise<IResourceLink[]> => {

  let listUrl = `${context.pageContext.site.absoluteUrl}`;
  listUrl += `/_api/web/lists('${config.resourceLinksListId}')/items?$select=Id,URL,SortOrder&`;
  listUrl += `&$orderby=SortOrder`;

  return context.spHttpClient.get(listUrl, SPHttpClient.configurations.v1).then(async (response: HttpClientResponse): Promise<IResourceLink[]> => {
    const data = await response.json();

    if (response.ok && data.value && data.value.length > 0) {
      return data.value.map((item) => mapSPResultToLinkItem(item));
    } else {
      return Promise.reject(data);
    }
  });
};


const mapSPResultToLinkItem = (spResult: any): IResourceLink => {

  if (spResult) {
    return {
      id: spResult.Id, title: spResult.URL.Description, url: spResult.URL.Url, sortOrder: spResult.SortOrder
    };
  }

  return null;
};
