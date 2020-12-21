import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { QueryObserverResult, useQuery } from 'react-query';
import { searchPeople, getPersonPhoto } from '../api/people-api';
import { IPerson } from '../models/IPerson';

export const usePeopleSearch = (searchTerm: string, context: ApplicationCustomizerContext): QueryObserverResult<IPerson[], Error> => {
  return useQuery<IPerson[], Error>(['search', searchTerm], () => searchPeople(searchTerm, context), { staleTime: Infinity, retry: 1 });
};

export const usePeoplePhoto = (loginName: string, context: ApplicationCustomizerContext): QueryObserverResult<string, Error> => {
  return useQuery<string, Error>(['search', loginName], () => getPersonPhoto(loginName, context), { staleTime: Infinity, retry: 1 });
};