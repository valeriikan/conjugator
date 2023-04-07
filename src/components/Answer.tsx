import { FunctionComponent, useEffect, useState } from 'react';
import { Pronoun, Tense, getFormByPronoun } from '../models';
import styles from './index.module.css';

type Props = {
    tense: Tense;
    pronoun: Pronoun;
};
export const Answer: FunctionComponent<Props> = ({ tense, pronoun }) => {
    const [value, setValue] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const form = getFormByPronoun(tense, pronoun);

    useEffect(() => {
        setValue('');
    }, [tense, pronoun]);

    useEffect(() => {
        setIsCorrect(value === form);
    }, [value]);

    const formatAumlauts = (input: string): void => {
        const formatted = input.replace(/a:/g, 'ä').replace(/o:/g, 'ö');
        setValue(formatted);
    };

    const inputColor = value.length > 0 ? (isCorrect ? styles.correct : styles.incorrect) : '';

    return (
        <input
            className={`${styles.input} ${inputColor}`}
            autoComplete={'off'}
            value={value}
            onChange={(event) => formatAumlauts(event.target.value)}
            disabled={isCorrect}
        />
    );
};
