import * as React from 'react';
import styles from './SearchBox.module.scss';

export interface ISearchBoxProps {
  initialText: string;
  onSearch: (searchTerm: string) => void;
}

const GuidedSearch : React.FC<ISearchBoxProps> = (props: ISearchBoxProps) => {
  const {initialText, onSearch} = props;
  const [searchTerm, setSearchTerm] = React.useState<string>(initialText);

  const onSearchBoxFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setSearchTerm('');
  }

  const onSearchTermChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  }

  const onSearchKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter'){
      onSearch(searchTerm);
    }
  }

  const onSearchClick = (evt: React.MouseEvent<HTMLButtonElement>) => {

  }

  const onAdvancedSearchClick = (evt: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <div className={styles.searchContainer}>
        <input
            type='text'
            className={styles.searchBox}
            onChange={onSearchTermChange}
            onFocus={onSearchBoxFocus}
            onKeyDown={onSearchKeyDown}
            value={searchTerm}>
        </input>
        <button type='button' className={styles.advancedSearchButton} onClick={onAdvancedSearchClick}>Advanced Search</button>
        <button
            type='button'
            className={styles.searchButton}
            onClick={onSearchClick}>
        </button>
    </div>
);
}
export default GuidedSearch;