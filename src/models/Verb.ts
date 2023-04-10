import { Tense, TenseNegative } from '../models';

interface VerbContstructor {
    verb: string;
    tenses: any;
}

export class Verb {
    public readonly infinitive: string;
    public readonly preesens: Tense;
    public readonly preesensNeg: Tense;
    public readonly imperfekti: Tense;
    public readonly imperfektiNeg: Tense;
    public readonly perfekti: Tense;
    public readonly perfektiNeg: Tense;
    public readonly pluskvamperfekti: Tense;
    public readonly pluskvamperfektiNeg: Tense;

    constructor(country: VerbContstructor) {
        this.infinitive = country.verb;
        this.preesens = new Tense(country.tenses[0]);
        this.preesensNeg = new Tense(country.tenses[8], TenseNegative.PREESENS);
        this.imperfekti = new Tense(country.tenses[2]);
        this.imperfektiNeg = new Tense(country.tenses[24], TenseNegative.IMPERFEKTI);
        this.perfekti = new Tense(country.tenses[10]);
        this.perfektiNeg = new Tense(country.tenses[24], TenseNegative.PERFEKTI);
        this.pluskvamperfekti = new Tense(country.tenses[12]);
        this.pluskvamperfektiNeg = new Tense(country.tenses[24], TenseNegative.PLUSKVAMPERFEKTI);
    }
}
