import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { QueryObserverResult, useQuery } from 'react-query';
import { getPolicyLinks, getFormLinks, getResourceLinks } from '../api/resourcelinks-api';
import { IResourceLink } from '../models/IResourceLink';

export const usePolicyLinks = (context: ApplicationCustomizerContext): QueryObserverResult<IResourceLink[], Error> => {
  return useQuery<IResourceLink[], Error>(['policy-links'], () => getPolicyLinks(context), { staleTime: 60000, retry: 2 });
};

export const useFormLinks = (context: ApplicationCustomizerContext): QueryObserverResult<IResourceLink[], Error> => {
  return useQuery<IResourceLink[], Error>(['form-links'], () => getFormLinks(context), { staleTime: 60000, retry: 2 });
};

export const useResourceLinks = (context: ApplicationCustomizerContext): QueryObserverResult<IResourceLink[], Error> => {
  return useQuery<IResourceLink[], Error>(['resource-links'], () => getResourceLinks(context), { staleTime: 60000, retry: 2 });
};
