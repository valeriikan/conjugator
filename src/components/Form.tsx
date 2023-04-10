import { FunctionComponent } from 'react';
import { Answer } from '../components';
import { Pronoun, Verb } from '../models';
import styles from './index.module.css';

type Props = {
    verb: Verb | null | undefined;
    pronoun: Pronoun;
};
export const Form: FunctionComponent<Props> = ({ verb, pronoun }) => {
    if (verb === undefined) {
        return <p>Loading…</p>;
    }

    if (verb === null) {
        return <p>Error while fetching conjugations</p>;
    }

    return (
        <div className={styles.box}>
            <div className={styles.group}>
                <p className={styles.tense}>preesens</p>
                <Answer tense={verb.preesens} pronoun={pronoun} />
            </div>
            <div className={styles.group}>
                <p className={styles.tense}>preesens neg.</p>
                <Answer tense={verb.preesensNeg} pronoun={pronoun} />
            </div>
            <div className={styles.group}>
                <p className={styles.tense}>imperfekti</p>
                <Answer tense={verb.imperfekti} pronoun={pronoun} />
            </div>
            <div className={styles.group}>
                <p className={styles.tense}>imperfekti neg.</p>
                <Answer tense={verb.imperfektiNeg} pronoun={pronoun} />
            </div>
            <div className={styles.group}>
                <p className={styles.tense}>perfekti</p>
                <Answer tense={verb.perfekti} pronoun={pronoun} />
            </div>
            <div className={styles.group}>
                <p className={styles.tense}>perfekti neg.</p>
                <Answer tense={verb.perfektiNeg} pronoun={pronoun} />
            </div>
            <div className={styles.group}>
                <p className={styles.tense}>plkvperfekti</p>
                <Answer tense={verb.pluskvamperfekti} pronoun={pronoun} />
            </div>
            <div className={styles.group}>
                <p className={styles.tense}>plkvperfekti neg.</p>
                <Answer tense={verb.pluskvamperfektiNeg} pronoun={pronoun} />
            </div>
        </div>
    );
};
