import { questions } from "../data/truthDrinkData";
import { basicStatements, sexyStatements } from "../data/neverHaveData";
import { choices } from "../data/votingGameData";
import { commands } from "../data/kingsCupData";
import { attributes } from "../data/drinkIfData";

import { shuffle } from "./functions";


const votingData = shuffle(choices);
const kingsData = shuffle(commands);
const ifData = shuffle(attributes);
const neverData = shuffle(basicStatements);
const neverData18 = shuffle(sexyStatements);
const truthData = shuffle(questions);

export { 
    votingData,
    kingsData,
    ifData,
    neverData,
    neverData18,
    truthData,
}