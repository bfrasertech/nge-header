import * as React from 'react';
import styles from './SearchResults.module.scss';

export interface ISearchResultsProps {
 
}

const SearchResults : React.FC<ISearchResultsProps> = (props: ISearchResultsProps) => {

  return (
    <div className={styles.searchResultsContainer}>
        results here
        
    </div>
);};
export default SearchResults;