import * as React from 'react';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';

import usePeopleSearch from '../hooks/usePeopleSearch';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import styles from './GuidedSearch.module.scss';

export interface IGuidedSearchProps {
  initialText: string;
  context: ApplicationCustomizerContext;
}

const GuidedSearch : React.FC<IGuidedSearchProps> = (props: IGuidedSearchProps) => {
  const {initialText, context} = props;
  const [showResults, setShowResults] = React.useState<boolean>(false);

  const handleSearch = (searchTerm: string): void => {
    setShowResults(!showResults);
  };

  const {data: peopleResults} = usePeopleSearch('', context);

  return <div className={styles.guidedSearchContainer}><SearchBox initialText={initialText} onSearch={handleSearch} />
    {showResults && peopleResults && <SearchResults peopleResults={peopleResults} />}
  </div>;
};

export default GuidedSearch;