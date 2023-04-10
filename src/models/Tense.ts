import { TenseNegative, Pronoun } from '../models';

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

    constructor(tense: TenseContstructor, negative?: TenseNegative) {
        if (negative == null) {
            this.mina = setPositiveFormByPronoun(tense, Pronoun.MINA);
            this.sina = setPositiveFormByPronoun(tense, Pronoun.SINA);
            this.han = setPositiveFormByPronoun(tense, Pronoun.HAN);
            this.me = setPositiveFormByPronoun(tense, Pronoun.ME);
            this.te = setPositiveFormByPronoun(tense, Pronoun.TE);
            this.he = setPositiveFormByPronoun(tense, Pronoun.HE);
        } else {
            this.mina = setNegativeFormByPronoun(tense, negative, Pronoun.MINA);
            this.sina = setNegativeFormByPronoun(tense, negative, Pronoun.SINA);
            this.han = setNegativeFormByPronoun(tense, negative, Pronoun.HAN);
            this.me = setNegativeFormByPronoun(tense, negative, Pronoun.ME);
            this.te = setNegativeFormByPronoun(tense, negative, Pronoun.TE);
            this.he = setNegativeFormByPronoun(tense, negative, Pronoun.HE);
        }
    }
}

const setPositiveFormByPronoun = (tense: TenseContstructor, pronoun: Pronoun): string => {
    let index = 0;
    while (tense.forms[index].pronoun !== pronoun.toLocaleLowerCase()) {
        index++;
    }

    return tense.forms[index].form;
};

const setNegativeFormByPronoun = (
    tense: TenseContstructor,
    negative: TenseNegative,
    pronoun: Pronoun
): string => {
    let base = '';
    switch (pronoun) {
        case Pronoun.MINA: {
            base = 'en';
            break;
        }
        case Pronoun.SINA: {
            base = 'et';
            break;
        }
        case Pronoun.HAN: {
            base = 'ei';
            break;
        }
        case Pronoun.ME: {
            base = 'emme';
            break;
        }
        case Pronoun.TE: {
            base = 'ette';
            break;
        }
        case Pronoun.HE: {
            base = 'eivät';
            break;
        }
    }

    if (negative === TenseNegative.PERFEKTI) {
        base += ' ole';
    }

    if (negative === TenseNegative.PLUSKVAMPERFEKTI) {
        switch (pronoun) {
            case Pronoun.MINA:
            case Pronoun.SINA:
            case Pronoun.HAN: {
                base += ' ollut';
                break;
            }
            case Pronoun.ME:
            case Pronoun.TE:
            case Pronoun.HE: {
                base += ' olleet';
                break;
            }
        }
    }

    if (negative === TenseNegative.PREESENS) {
        return `${base} ${tense.forms[0].form}`;
    } else {
        let form = '';
        switch (pronoun) {
            case Pronoun.MINA:
            case Pronoun.SINA:
            case Pronoun.HAN: {
                form = tense.forms[0].form.split(' ')[1];
                break;
            }
            case Pronoun.ME:
            case Pronoun.TE:
            case Pronoun.HE: {
                form = tense.forms[1].form.split(' ')[1];
                break;
            }
        }

        return `${base} ${form}`;
    }
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
