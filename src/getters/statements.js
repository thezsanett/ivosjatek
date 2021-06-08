import * as truthDrink from "../data/truthDrinkData";
import * as neverHave from "../data/neverHaveData";
import * as votingGame from "../data/votingGameData";
import * as kingsCup from "../data/kingsCupData";
import * as drinkIf from "../data/drinkIfData";
import * as mostLikely from "../data/mostLikelyData";
import * as categories from "../data/categoriesData";

import { shuffle } from "./functions";

export const truthDrinkData = shuffle(truthDrink.both);
export const neverHaveData = shuffle(neverHave.both);
export const votingGameData = shuffle(votingGame.both);
export const kingsCupData = shuffle(kingsCup.both);
export const drinkIfData = shuffle(drinkIf.both);
export const mostLikelyData = shuffle(mostLikely.both);
export const categoriesData = shuffle(categories.both);