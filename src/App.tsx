import { useEffect, useState } from 'react';
import { WEB_CONJUCATOR_PATH, getConjugationsByVerb } from './api';
import { Form } from './components';
import { Pronoun, Verb, getRandomPronoun } from './models';
import { VERBS } from './resources';
import './App.css';

function App() {
    const [infinitive, setInfinitive] = useState<string>('');
    const [pronoun, setPronoun] = useState<Pronoun>(Pronoun.MINA);
    const [verb, setVerb] = useState<Verb | null | undefined>(undefined);

    useEffect(() => {
        resetTask();
    }, []);

    useEffect(() => {
        if (infinitive.length > 0) {
            fetchConjugations();
        }
    }, [pronoun, infinitive]);

    const resetTask = (): void => {
        const index = Math.floor(Math.random() * VERBS.length);
        setInfinitive(VERBS[index]);

        const randomPronoun = getRandomPronoun();
        setPronoun(randomPronoun);
    };

    const fetchConjugations = async (): Promise<void> => {
        const v = await getConjugationsByVerb(infinitive);
        setVerb(v);
    };

    return (
        <div className='App'>
            <a
                className='infinitive'
                href={`${WEB_CONJUCATOR_PATH}/${infinitive}`}
                target={'_blank'}
                tabIndex={-1}
            >
                {infinitive}
            </a>
            <p className='pronoun'>{pronoun}</p>
            <Form verb={verb} pronoun={pronoun} />
            <button className='button' onClick={() => resetTask()}>
                Another one
            </button>
        </div>
    );
}

export default App;
