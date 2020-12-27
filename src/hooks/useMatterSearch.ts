import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { QueryObserverResult, useQuery } from 'react-query';
import { searchMatters } from '../api/matter-api';
import { IMatter } from '../models/IMatter';

export const useMatterSearch = (searchTerm: string, context: ApplicationCustomizerContext): QueryObserverResult<IMatter[], Error> => {
  return useQuery<IMatter[], Error>(['matter-search', searchTerm], () => searchMatters(searchTerm, context), { staleTime: 60000, retry: 2 });
};
