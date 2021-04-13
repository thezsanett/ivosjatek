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
  const [indexForNeverHave18, setIndexForNeverHave18] = React.useState(0);
  const [indexForVoting, setIndexForVoting] = React.useState(0);
  const [indexForTruthDrink, setIndexForTruthDrink] = React.useState(0);
  const [indexForKingsCup, setIndexForKingsCup] = React.useState(0);

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
    console.log(dataArray);
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
                      setCurrentGame(GAMES.NEVER_HAVE_I_EVER_18);
                      changeBackGroundColor(shuffle(allColors));
                    }}
                  >
                    Én még soha 18+
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
            dataLength={statements.ifData.length} 
            getCurrentData={() => getCurrentData(statements.ifData, indexForDrinkIf, setIndexForDrinkIf)}
            starterStatement={statements.ifData[indexForDrinkIf]}
            index={indexForDrinkIf}
          />
        }

        {(currentGame === GAMES.NEVER_HAVE_I_EVER) && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="Én még soha nem" punctuation="."
            dataLength={statements.neverData18.length} 
            getCurrentData={() => getCurrentData(statements.neverData, indexForNeverHave, setIndexForNeverHave)}
            starterStatement={statements.neverData[indexForNeverHave]}
            index={indexForNeverHave}
          />
        }

        {(currentGame === GAMES.NEVER_HAVE_I_EVER_18) && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="Én még soha nem" punctuation="."
            dataLength={statements.neverData18.length} 
            getCurrentData={() => getCurrentData(statements.neverData18, indexForNeverHave18, setIndexForNeverHave18)}
            starterStatement={statements.neverData18[indexForNeverHave18]}
            index={indexForNeverHave18}
          />
        }

        {currentGame === GAMES.VOTING && 
          <VoteGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            dataLength={statements.votingData.length} 
            getCurrentData={() => getCurrentData(statements.votingData, indexForVoting, setIndexForVoting)}
            starterStatement={statements.votingData[indexForVoting]}
            index={indexForVoting}
          />
        }

        {currentGame === GAMES.TRUTH_OR_DRINK && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="" punctuation=""
            dataLength={statements.truthData.length} 
            getCurrentData={() => getCurrentData(statements.truthData, indexForTruthDrink, setIndexForTruthDrink)}
            starterStatement={statements.truthData[indexForTruthDrink]}
            index={indexForTruthDrink}
          />
        }

        {currentGame === GAMES.KINGS_CUP && 
          <DoubleLineGame 
            goBack={onGoBack} 
            changeColor={() => changeBackGroundColor(shuffle(allColors))} 
            firstRow="" punctuation="!"
            dataLength={statements.kingsData.length} 
            getCurrentData={() => getCurrentData(statements.kingsData, indexForKingsCup, setIndexForKingsCup)}
            starterStatement={statements.kingsData[indexForKingsCup]}
            index={indexForKingsCup}
          />
        }

      </header>
    </div>
  );
}

export default App;
