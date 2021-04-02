import React from "react";
import '../stylesheets/App.css';
import * as GAMES from "../static/enums";
import SingleLineGame from "./SingleLineGame";
import VoteGame from "./VoteGame";
import DoubleLineGame from "./DoubleLineGame";

function App() {
  const [currentGame, setCurrentGame] = React.useState(GAMES.NONE);
  const [color, setColor] = React.useState("#DFFF00");
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
            <tr>
              <td>
                <button 
                  className="game-button" 
                  onClick={() => setCurrentGame(GAMES.NEVER_HAVE_I_EVER)}
                >
                  Én még soha
                </button>
              </td>
              <td>
                <button 
                  className="game-button" 
                  onClick={() => setCurrentGame(GAMES.DRINK_IF)}
                >
                  Igyon az, aki...
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button 
                  className="game-button" 
                  onClick={() => setCurrentGame(GAMES.VOTING)}
                >
                  Szavazás
                </button>
              </td>
              <td>
                <button 
                  className="game-button" 
                  onClick={() => setCurrentGame(GAMES.TRUTH_OR_DRINK)}
                >
                  Felelsz vagy iszol
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button 
                  className="game-button" 
                  onClick={() => setCurrentGame(GAMES.KINGS_CUP)}
                >
                  Kings' cup
                </button>
              </td>
              <td>
              </td>
            </tr>
            
          </table>
        }

        {(currentGame === GAMES.NEVER_HAVE_I_EVER || currentGame === GAMES.DRINK_IF) && 
          <DoubleLineGame goBack={onGoBack} changeColor={changeBackGroundColor}/>
        }

        {currentGame === GAMES.VOTING && 
          <VoteGame goBack={onGoBack} changeColor={changeBackGroundColor}/>
        }

        {(currentGame === GAMES.TRUTH_OR_DRINK || currentGame === GAMES.KINGS_CUP) && 
          <SingleLineGame goBack={onGoBack} changeColor={changeBackGroundColor}/>
        }

      </header>
    </div>
  );
}

export default App;
