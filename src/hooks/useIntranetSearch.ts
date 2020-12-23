import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { QueryObserverResult, useQuery } from 'react-query';
import { searchIntranet } from '../api/intranet-api';
import { IIntranetResult } from '../models/IIntranetResult';

export const useIntranetSearch = (searchTerm: string, context: ApplicationCustomizerContext): QueryObserverResult<IIntranetResult[], Error> => {
  return useQuery<IIntranetResult[], Error>(['intranet-search', searchTerm], () => searchIntranet(searchTerm, context), { staleTime: 60000, retry: 2 });
};
