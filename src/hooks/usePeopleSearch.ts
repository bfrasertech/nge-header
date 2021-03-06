import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { QueryObserverResult, useQuery } from 'react-query';
import { searchPeople } from '../api/people-api';
import { IPerson } from '../models/IPerson';

export const usePeopleSearch = (searchTerm: string, context: ApplicationCustomizerContext): QueryObserverResult<IPerson[], Error> => {
  return useQuery<IPerson[], Error>(['people-search', searchTerm], () => searchPeople(searchTerm, context), { staleTime: 60000, retry: 2 });
};
