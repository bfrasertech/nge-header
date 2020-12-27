import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { QueryObserverResult, useQuery } from 'react-query';
import { searchClients } from '../api/client-api';
import { IClient } from '../models/IClient';

export const usePeopleSearch = (searchTerm: string, context: ApplicationCustomizerContext): QueryObserverResult<IClient[], Error> => {
  return useQuery<IClient[], Error>(['client-search', searchTerm], () => searchClients(searchTerm, context), { staleTime: 60000, retry: 2 });
};
