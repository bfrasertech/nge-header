import * as React from 'react';
import styles from './ResultsNavPanel.module.scss';

export interface IResultsNavPanelProps {
}

export const ResultsNavPanel : React.FC<IResultsNavPanelProps> = (props: IResultsNavPanelProps) => {
  return (
    <div className={styles.resultNavPanel}>
    Results nav here
</div>
);};