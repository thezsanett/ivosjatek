import React from "react";
import HelpIcon from '@material-ui/icons/Help';
import '../stylesheets/App.css';

import * as GAMES from "../getters/enums";
import * as statements from "../getters/statements";

import allColors from "../data/colors";

import VoteGame from "./VoteGame";
import DoubleLineGame from "./DoubleLineGame";
import Rules from "./Rules";

import { shuffle } from "../getters/functions";

function App() {
  const [currentGame, setCurrentGame] = React.useState(GAMES.NONE);
  
  const starterColor = "#DFFF00";

  const [color, setColor] = React.useState(starterColor);
  const [colorIndex, setColorIndex] = React.useState(-1);

  const [indexForDrinkIf, setIndexForDrinkIf] = React.useState(0);
  const [indexForNeverHave, setIndexForNeverHave] = React.useState(0);
  const [indexForCategories, setIndexForCategories] = React.useState(0);
  const [indexForVoting, setIndexForVoting] = React.useState(0);
  const [indexForTruthDrink, setIndexForTruthDrink] = React.useState(0);
  const [indexForKingsCup, setIndexForKingsCup] = React.useState(0);
  const [indexForMostLikely, setIndexForMostLikely] = React.useState(0);

  const onGoBack = () => {
    setColor(starterColor);
    setCurrentGame(GAMES.NONE);
  }

  const changeBackGroundColor = (colors) => {
    const index = (colorIndex + 1) % colors.length;
    setColorIndex(index);
    setColor(colors[index]);
  }

  const getCurrentData = (dataArray, indexValue, setIndexValue) => {
    const index = (indexValue + 1) % dataArray.length;
    setIndexValue(index);
    return dataArray[index];
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>

        {currentGame === GAMES.NONE && 
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.NEVER_HAVE_I_EVER);
                      changeBackGroundColor(shuffle(allColors));
                    }}
                  >
                    Én még soha
                  </button>
                </td>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.CATEGORIES);
                      changeBackGroundColor(shuffle(allColors));
                    }}
                  >
                    Kategóriák
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.VOTING);
                      changeBackGroundColor(shuffle(allColors));
                    }}
                  >
                    Szavazás
                  </button>
                </td>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.TRUTH_OR_DRINK);
                      changeBackGroundColor(shuffle(allColors));
                    }}
                  >
                    Felelsz vagy iszol
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.DRINK_IF);
                      changeBackGroundColor(shuffle(allColors));
                    }}
                  >
                    Igyon az, aki...
                  </button>
                </td>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.KINGS_CUP);
                      changeBackGroundColor(shuffle(allColors));
                    }}
                  >
                    Kings' cup
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.MOST_LIKELY);
                      changeBackGroundColor(shuffle(allColors));
                    }}
                  >
                    Most likely to
                  </button>
                </td>
                <td>
                  <button 
                    className="game-button" 
                    // onClick={() => {
                    //   setCurrentGame(GAMES.MOST_LIKELY);
                    //   changeBackGroundColor(shuffle(allColors));
                    // }}
                    style={{opacity: "0.7"}}
                  >
                    Coming soon... 😉
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <HelpIcon style={{fontSize: "30px", cursor: "pointer"}} onClick={() => setCurrentGame(GAMES.HELP)}/>
        </>
        }
        
        {(currentGame === GAMES.HELP) && 
          <Rules goBack={onGoBack} />
        }

        {(currentGame === GAMES.DRINK_IF) && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="Igyon az," punctuation="!" 
            dataLength={statements.drinkIfData.length} 
            getCurrentData={() => getCurrentData(statements.drinkIfData, indexForDrinkIf, setIndexForDrinkIf)}
            starterStatement={statements.drinkIfData[indexForDrinkIf]}
            index={indexForDrinkIf}
          />
        }

        {(currentGame === GAMES.NEVER_HAVE_I_EVER) && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="Én még soha nem" punctuation="."
            dataLength={statements.neverHaveData.length} 
            getCurrentData={() => getCurrentData(statements.neverHaveData, indexForNeverHave, setIndexForNeverHave)}
            starterStatement={statements.neverHaveData[indexForNeverHave]}
            index={indexForNeverHave}
          />
        }

        {(currentGame === GAMES.CATEGORIES) && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="" punctuation=""
            dataLength={statements.categoriesData.length} 
            getCurrentData={() => getCurrentData(statements.categoriesData, indexForCategories, setIndexForCategories)}
            starterStatement={statements.categoriesData[indexForCategories]}
            index={indexForCategories}
          />
        }

        {currentGame === GAMES.VOTING && 
          <VoteGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            dataLength={statements.votingGameData.length} 
            getCurrentData={() => getCurrentData(statements.votingGameData, indexForVoting, setIndexForVoting)}
            starterStatement={statements.votingGameData[indexForVoting]}
            index={indexForVoting}
          />
        }

        {currentGame === GAMES.TRUTH_OR_DRINK && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="" punctuation=""
            dataLength={statements.truthDrinkData.length} 
            getCurrentData={() => getCurrentData(statements.truthDrinkData, indexForTruthDrink, setIndexForTruthDrink)}
            starterStatement={statements.truthDrinkData[indexForTruthDrink]}
            index={indexForTruthDrink}
          />
        }

        {currentGame === GAMES.KINGS_CUP && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="" punctuation="!"
            dataLength={statements.kingsCupData.length} 
            getCurrentData={() => getCurrentData(statements.kingsCupData, indexForKingsCup, setIndexForKingsCup)}
            starterStatement={statements.kingsCupData[indexForKingsCup]}
            index={indexForKingsCup}
          />
        }

        {currentGame === GAMES.MOST_LIKELY && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="Kire a legvalószínűbb, hogy" punctuation="?"
            dataLength={statements.mostLikelyData.length} 
            getCurrentData={() => getCurrentData(statements.mostLikelyData, indexForMostLikely, setIndexForMostLikely)}
            starterStatement={statements.mostLikelyData[indexForMostLikely]}
            index={indexForMostLikely}
          />
        }

      </header>
    </div>
  );
}

export default App;
