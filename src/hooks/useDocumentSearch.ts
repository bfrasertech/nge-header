import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { QueryObserverResult, useQuery } from 'react-query';
import { searchDocuments } from '../api/document-api';
import { IDocument } from '../models/IDocument';

export const useDocumentSearch = (searchTerm: string, context: ApplicationCustomizerContext): QueryObserverResult<IDocument[], Error> => {
  return useQuery<IDocument[], Error>(['document-search', searchTerm], () => searchDocuments(searchTerm, context), { staleTime: 60000, retry: 2 });
};
