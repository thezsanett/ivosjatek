import React from "react";
import '../stylesheets/App.css';

import * as GAMES from "../getters/enums";
import allColors from "../data/colors";

import SingleLineGame from "./SingleLineGame";
import VoteGame from "./VoteGame";
import DoubleLineGame from "./DoubleLineGame";

import { questions as truthData} from "../data/truthDrinkData";
import { basicStatements as neverData, sexyStatements as neverData18, } from "../data/neverHaveData";
import { choices as votingData } from "../data/votingGameData";
import { commands as kingsData } from "../data/kingsCupData";
import { attributes as ifData } from "../data/drinkIfData";

import { shuffle } from "../getters/functions";

function App() {
  const [currentGame, setCurrentGame] = React.useState(GAMES.NONE);
  const starterColor = "#DFFF00";
  const [color, setColor] = React.useState(starterColor);
  const [colorIndex, setColorIndex] = React.useState(-1);

  const onGoBack = () => {
    setColor(starterColor);
    setCurrentGame(GAMES.NONE);
  }

  const changeBackGroundColor = (colors) => {
    const index = (colorIndex + 1) % colors.length;
    setColorIndex(index);
    setColor(colors[index]);
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>

        {currentGame === GAMES.NONE && 
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
                    Én még soha 🔞
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
        }
        

        {(currentGame === GAMES.DRINK_IF) && 
          <DoubleLineGame goBack={onGoBack} changeColor={() => changeBackGroundColor(shuffle(allColors))} firstRow="Igyon az," punctuation="!" data={shuffle(ifData)}/>
        }

        {(currentGame === GAMES.NEVER_HAVE_I_EVER) && 
          <DoubleLineGame goBack={onGoBack} changeColor={() => changeBackGroundColor(shuffle(allColors))} firstRow="Én még soha nem" punctuation="." data={shuffle(neverData)}/>
        }

        {(currentGame === GAMES.NEVER_HAVE_I_EVER_18) && 
          <DoubleLineGame goBack={onGoBack} changeColor={() => changeBackGroundColor(shuffle(allColors))} firstRow="Én még soha nem" punctuation="." data={shuffle(neverData18)}/>
        }

        {currentGame === GAMES.VOTING && 
          <VoteGame goBack={onGoBack} changeColor={() => changeBackGroundColor(shuffle(allColors))} data={shuffle(votingData)}/>
        }

        {currentGame === GAMES.TRUTH_OR_DRINK && 
          <SingleLineGame goBack={onGoBack} changeColor={() => changeBackGroundColor(shuffle(allColors))} data={shuffle(truthData)}/>
        }

        {currentGame === GAMES.KINGS_CUP && 
          <SingleLineGame goBack={onGoBack} changeColor={() => changeBackGroundColor(shuffle(allColors))} data={shuffle(kingsData)}/>
        }

      </header>
    </div>
  );
}

export default App;
