import * as React from 'react';
import styles from './GuidedSearch.module.scss';

export interface IGuidedSearchProps {
  initialText: string;
}

const GuidedSearch : React.FC<IGuidedSearchProps> = (props: IGuidedSearchProps) => {
  const {initialText} = props;

return <div className={styles.searchBox}><div>{initialText}</div></div>  
}

export default GuidedSearch;