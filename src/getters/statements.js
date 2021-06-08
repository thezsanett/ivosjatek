import * as truthDrink from "../data/truthDrinkData";
import * as neverHave from "../data/neverHaveData";
import * as votingGame from "../data/votingGameData";
import * as kingsCup from "../data/kingsCupData";
import * as drinkIf from "../data/drinkIfData";
import * as mostLikely from "../data/mostLikelyData";
import * as categories from "../data/categoriesData";

import { shuffle } from "./functions";

let hasNormalData = true;
let hasSexyData = true;

let truthDrinkData = null;
let neverHaveData = null;
let votingGameData = null;
let kingsCupData = null;
let drinkIfData = null;
let mostLikelyData = null;
let categoriesData = null;

function initializeData() {
    truthDrinkData = shuffle(truthDrink.both);
    neverHaveData = shuffle(neverHave.both);
    votingGameData = shuffle(votingGame.both);
    kingsCupData = shuffle(kingsCup.both);
    drinkIfData = shuffle(drinkIf.both);
    mostLikelyData = shuffle(mostLikely.both);
    categoriesData = shuffle(categories.both);
}

function pushData(type) {
    truthDrinkData = shuffle(truthDrinkData.concat(truthDrink[type]));
    neverHaveData = shuffle(neverHaveData.concat(neverHave[type]));
    votingGameData = shuffle(votingGameData.concat(votingGame[type]));
    kingsCupData = shuffle(kingsCupData.concat(kingsCup[type]));
    drinkIfData = shuffle(drinkIfData.concat(drinkIf[type]));
    mostLikelyData = shuffle(mostLikelyData.concat(mostLikely[type]));
    categoriesData = shuffle(categoriesData.concat(categories[type]));
}

export function setData(isNormal, isSexy) {
    hasNormalData = isNormal;
    hasSexyData = isSexy;

    initializeData();
    
    if (isNormal) pushData("basic");
    if (isSexy) pushData("sexy");
}

setData(hasNormalData, hasSexyData);

export {
    truthDrinkData,
    neverHaveData,
    votingGameData,
    kingsCupData,
    drinkIfData,
    mostLikelyData,
    categoriesData
}

export { hasSexyData, hasNormalData };