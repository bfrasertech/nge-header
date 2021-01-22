import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { QueryObserverResult, useQuery } from 'react-query';
import { getMostRecentUrgentAnnouncement } from '../api/urgent-announcement-api';
import { IUrgentAlert } from '../models/IUrgentAlert';

export const useMostRecentUrgentAnnouncement = (context: ApplicationCustomizerContext): QueryObserverResult<IUrgentAlert, Error> => {
  return useQuery<IUrgentAlert, Error>(['urgent-announcement'], () => getMostRecentUrgentAnnouncement(context), { staleTime: 60000, retry: 2 });
};
