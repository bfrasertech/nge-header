import * as React from 'react';
import { IPerson } from '../models/IPerson';
import styles from './PersonCard.module.scss';

const personPlaceholder: any = require('../images/person.png');

export interface IPersonCardProps {
  person: IPerson;
}

export const PersonCard: React.FC<IPersonCardProps> = (props: IPersonCardProps): React.ReactElement<IPersonCardProps> => {
  const {person} = props;
  return (
    <div className={styles.card}>
      <a href={`#`} target="_blank">
      <div className={styles.photo} onError={() => alert('no image')} style={{ backgroundImage: `url(${props.person.photoUrl}), url(${personPlaceholder})` }}>
      </div>
      </a>
      <div className={styles.dataContainer}>
      <div className={styles.nameAndTitleContainer}>
        <div>
        <span className={styles.name}>{person.name}</span>
        </div>
        <div>
        <span className={styles.title}>{person.title}</span>
        </div>
      </div>
      <div className={styles.otherDetailsContainer}>
      <div>
        <label htmlFor="">Ext:</label> <span className={styles.name}>{person.extension}</span>
        </div>
        <div>
        <label htmlFor="">Secretary:</label> <span className={styles.name}>{person.assistantName}</span>
        </div>
        <div>
        <label htmlFor="">Office:</label> <span className={styles.name}>{person.office}</span>
        </div>
      </div>
      </div>
    </div>);
};
