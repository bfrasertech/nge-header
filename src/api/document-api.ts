
import { AadHttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IDocument } from '../models/IDocument';
import { config } from '../config';

const mockDocuments: IDocument[] = [];



export const searchDocuments = async (searchTerm: string, context: ApplicationCustomizerContext): Promise<IDocument[]> => {
  if (mockDocuments.length === 0) {
    for (let i = 1; i <= config.maxDocumentResults; i++) {
      mockDocuments.push({
        id: i.toString(),
        name: `Document Name ${i.toString()}`,
        firstName: `First Name ${i.toString()}`,
        lastName: `Last Name ${i.toString()}`,
        docDate: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Maecenas porttitor congue massa. Fusce'
      });
    }
  }

  return new Promise<IDocument[]>(resolve => {
    resolve(mockDocuments);
  });
};
