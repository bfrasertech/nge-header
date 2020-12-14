import * as React from 'react';
import styles from './GuidedSearch.module.scss';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

export interface IGuidedSearchProps {
  initialText: string;
}

const GuidedSearch : React.FC<IGuidedSearchProps> = (props: IGuidedSearchProps) => {
  const {initialText} = props;
  const [showResults, setShowResults] = React.useState<boolean>(false);

  const showSearch = () => {
    setShowResults(true);
  };

  const handleSearch = (searchTerm: string): void => {
    setShowResults(!showResults);
  };

  return <div className={styles.guidedSearchContainer}><SearchBox initialText={initialText} onSearch={handleSearch} />
    {showResults && <SearchResults />}
  </div>;
};

//   return (<div className={styles.searchBox} onKeyDown={(e) => {if (e.key === 'Enter') {showSearch();}}}>
//     <input type='text' value="abc" />
//     {showResults && <div>results here</div> }
//     </div>);  
//   // return (<div>test</div>);
//  };

export default GuidedSearch;