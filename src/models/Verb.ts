import { Tense } from '../models';

interface VerbContstructor {
    verb: string;
    tenses: any;
}

export class Verb {
    public readonly infinitive: string;
    public readonly preesens: Tense;
    public readonly imperfekti: Tense;
    public readonly perfekti: Tense;
    public readonly pluskvamperfekti: Tense;

    constructor(country: VerbContstructor) {
        this.infinitive = country.verb;
        this.preesens = new Tense(country.tenses[0]);
        this.imperfekti = new Tense(country.tenses[2]);
        this.perfekti = new Tense(country.tenses[10]);
        this.pluskvamperfekti = new Tense(country.tenses[12]);
    }
}
