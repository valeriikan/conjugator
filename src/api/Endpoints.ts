import axios from 'axios';
import { API_CONJUCATOR_PATH } from '../api';
import { Verb } from '../models';

export async function getConjugationsByVerb(verb: string): Promise<Verb | null> {
    return await axios
        .get(`${API_CONJUCATOR_PATH}/${verb}`)
        .then((response) => new Verb(response.data))
        .catch(() => null);
}
