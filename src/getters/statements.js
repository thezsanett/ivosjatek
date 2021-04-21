import { questions, orderedQuestions, followingQuestions } from "../data/truthDrinkData";
import { basicStatements, sexyStatements } from "../data/neverHaveData";
import { choices } from "../data/votingGameData";
import { commands } from "../data/kingsCupData";
import { attributes } from "../data/drinkIfData";
import { who } from "../data/mostLikelyData";

import { shuffle, insertToArrayWithOffset } from "./functions";


const likelyData = shuffle(who);
const votingData = shuffle(choices);
const kingsData = shuffle(commands);
const ifData = shuffle(attributes);
const neverData = shuffle(basicStatements);
const neverData18 = shuffle(sexyStatements);

const shuffledTruthData = shuffle(questions);
const orderedTruthData = insertToArrayWithOffset(shuffledTruthData, orderedQuestions, true);
const truthData = insertToArrayWithOffset(orderedTruthData, followingQuestions, false);

export { 
    votingData,
    kingsData,
    ifData,
    neverData,
    neverData18,
    truthData,
    likelyData,
}