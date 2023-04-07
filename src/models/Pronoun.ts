export enum Pronoun {
    MINA = 'MINÄ',
    SINA = 'SINÄ',
    HAN = 'HÄN',
    ME = 'ME',
    TE = 'TE',
    HE = 'HE',
}

export const getRandomPronoun = (): Pronoun => {
    const keys = Object.keys(Pronoun) as (keyof typeof Pronoun)[];
    const index = Math.floor(Math.random() * keys.length);

    return Pronoun[keys[index]];
};
