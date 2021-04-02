import React from "react";
import '../stylesheets/App.css';
import * as GAMES from "../static/enums";
import SingleLineGame from "./SingleLineGame";
import VoteGame from "./VoteGame";
import DoubleLineGame from "./DoubleLineGame";
import { questions as truthData} from "../static/questions";
import { statements as neverData } from "../static/never";
import { choices as votingData } from "../static/choices";
import { shuffle } from "../static/getters";

function App() {
  const [currentGame, setCurrentGame] = React.useState(GAMES.NONE);
  const starterColor = "#DFFF00";
  const [color, setColor] = React.useState(starterColor);
  const [colorIndex, setColorIndex] = React.useState(-1);
  const allColors = [
    "#FFBF00",
    "#FF7F50",
    "#DE3163",
    "#9FE2BF",
    "#40E0D0",
    "#6495ED"
  ]

  const onGoBack = () => {
    setColor(starterColor);
    setCurrentGame(GAMES.NONE);
  }

  const changeBackGroundColor = () => {
    const index = (colorIndex + 1) % allColors.length;
    setColorIndex(index);
    setColor(allColors[index]);
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
                      changeBackGroundColor();
                    }}
                  >
                    Én még soha
                  </button>
                </td>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.DRINK_IF);
                      changeBackGroundColor();
                    }}
                    disabled
                  >
                    Igyon az, aki...
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button 
                    className="game-button" 
                    onClick={() => {
                      setCurrentGame(GAMES.VOTING);
                      changeBackGroundColor();
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
                      changeBackGroundColor();
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
                      setCurrentGame(GAMES.KINGS_CUP);
                      changeBackGroundColor();
                    }}
                    disabled
                  >
                    Kings' cup
                  </button>
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
        }

        {(currentGame === GAMES.DRINK_IF) && 
          <DoubleLineGame goBack={onGoBack} changeColor={changeBackGroundColor} firstRow="" data={shuffle(["fejlesztes alatt"])}/>
        }

        {(currentGame === GAMES.NEVER_HAVE_I_EVER) && 
          <DoubleLineGame goBack={onGoBack} changeColor={changeBackGroundColor} firstRow="Én még soha nem" data={shuffle(neverData)}/>
        }

        {currentGame === GAMES.VOTING && 
          <VoteGame goBack={onGoBack} changeColor={changeBackGroundColor} data={shuffle(votingData)}/>
        }

        {currentGame === GAMES.TRUTH_OR_DRINK && 
          <SingleLineGame goBack={onGoBack} changeColor={changeBackGroundColor} data={shuffle(truthData)}/>
        }

        {currentGame === GAMES.KINGS_CUP && 
          <SingleLineGame goBack={onGoBack} changeColor={changeBackGroundColor} data={shuffle(["fejlesztes alatt"])}/>
        }

      </header>
    </div>
  );
}

export default App;
