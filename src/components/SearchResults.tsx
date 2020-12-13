import * as React from 'react';
import { IPerson } from '../models/IPerson';
import { PersonCard } from './PersonCard';
import styles from './SearchResults.module.scss';

export interface ISearchResultsProps {
 
}

const SearchResults : React.FC<ISearchResultsProps> = (props: ISearchResultsProps) => {

  let peopleResults: IPerson[] = [];

  peopleResults.push({
    id: '1',
    name: 'name', 
    extension: 'ext', 
    title: 'title', 
    assistantName: 'rate', 
    assistantExtension: 'a_ext',
    photoUrl: 'photo url', 
    office: 'office'
  });

  peopleResults.push({
    id: '1',
    name: 'name', 
    extension: 'ext', 
    title: 'title', 
    assistantName: 'rate', 
    assistantExtension: 'a_ext',
    photoUrl: 'photo url', 
    office: 'office'
  });

  peopleResults.push({
    id: '1',
    name: 'name', 
    extension: 'ext', 
    title: 'title', 
    assistantName: 'rate', 
    assistantExtension: 'a_ext',
    photoUrl: 'photo url', 
    office: 'office'
  });

  peopleResults.push({
    id: '1',
    name: 'name', 
    extension: 'ext', 
    title: 'title', 
    assistantName: 'rate', 
    assistantExtension: 'a_ext',
    photoUrl: 'photo url', 
    office: 'office'
  });

 peopleResults.push({
    id: '1',
    name: 'name', 
    extension: 'ext', 
    title: 'title', 
    assistantName: 'rate', 
    assistantExtension: 'a_ext',
    photoUrl: 'photo url', 
    office: 'office'
  });

  return (
    <div className={styles.searchResultsContainer}>
      <div>
        <div className={styles.resultsHeader}>
          <div className={styles.headerContent}>
            <span className={styles.contentCategory}>People Directory</span>
            <label className={styles.contentTypeLabel}>People</label>
            <select>
              <option value="1">People</option>
            </select>
          </div>
        </div>
        <div className={styles.mainResultPanel}>
          <div className={styles.innerContainer}>
            {
              peopleResults.map((person: IPerson) => {
                return (
                  <PersonCard person={person} />
                );
              })
            }
          </div>
        </div>
        </div> 
    </div>
);};
export default SearchResults;