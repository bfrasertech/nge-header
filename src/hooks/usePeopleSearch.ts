import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import {QueryResult, useQuery} from 'react-query';
import {searchPeople} from '../api/people-api';
import { IPerson } from '../models/IPerson';

const executePeopleSearch = async (searchTerm: string, context: ApplicationCustomizerContext) => {
  return searchPeople(searchTerm, context);
};

export default function usePeopleSearch(searchTerm: string, context: ApplicationCustomizerContext): QueryResult<IPerson[], Error> {
  return useQuery(['search', searchTerm], () => executePeopleSearch(searchTerm, context), {staleTime: Infinity, retry: 1});
}