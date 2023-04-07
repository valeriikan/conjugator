import { Pronoun } from '../models';

interface TenseContstructor {
    forms: Array<any>;
}

export class Tense {
    public readonly mina: string;
    public readonly sina: string;
    public readonly han: string;
    public readonly me: string;
    public readonly te: string;
    public readonly he: string;

    constructor(tense: TenseContstructor) {
        this.mina = setFormByPronoun(tense, 'minä');
        this.sina = setFormByPronoun(tense, 'sinä');
        this.han = setFormByPronoun(tense, 'hän');
        this.me = setFormByPronoun(tense, 'me');
        this.te = setFormByPronoun(tense, 'te');
        this.he = setFormByPronoun(tense, 'he');
    }
}

const setFormByPronoun = (tense: TenseContstructor, pronoun: string): string => {
    let index = 0;
    while (tense.forms[index].pronoun !== pronoun) {
        index++;
    }

    return tense.forms[index].form;
};

export const getFormByPronoun = (tense: Tense, pronoun: Pronoun): string => {
    switch (pronoun) {
        case Pronoun.MINA: {
            return tense.mina;
        }
        case Pronoun.SINA: {
            return tense.sina;
        }
        case Pronoun.HAN: {
            return tense.han;
        }
        case Pronoun.ME: {
            return tense.me;
        }
        case Pronoun.TE: {
            return tense.te;
        }
        case Pronoun.HE: {
            return tense.he;
        }
    }
};
