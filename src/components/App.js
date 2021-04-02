import React from "react";
import '../stylesheets/App.css';
import * as GAMES from "../static/enums";
import SingleLineGame from "./SingleLineGame";
import VoteGame from "./VoteGame";
import DoubleLineGame from "./DoubleLineGame";

function App() {
  const [currentGame, setCurrentGame] = React.useState(GAMES.NONE);

  return (
    <div className="App">
      <header className="App-header">

        {currentGame === GAMES.NONE && 
          <>
            <button onClick={() => setCurrentGame(GAMES.NEVER_HAVE_I_EVER)}>Én még soha</button>
            <button onClick={() => setCurrentGame(GAMES.DRINK_IF)}>Igyon az, aki...</button>
            <button onClick={() => setCurrentGame(GAMES.VOTING)}>Szavazás</button>
            <button onClick={() => setCurrentGame(GAMES.TRUTH_OR_DRINK)}>Felelsz vagy iszol</button>
            <button onClick={() => setCurrentGame(GAMES.KINGS_CUP)}>Kings' cup</button>
          </>
        }

        {(currentGame === GAMES.NEVER_HAVE_I_EVER || currentGame === GAMES.DRINK_IF) && 
          <DoubleLineGame/>
        }

        {currentGame === GAMES.VOTING && 
          <VoteGame/>
        }

        {(currentGame === GAMES.TRUTH_OR_DRINK || currentGame === GAMES.KINGS_CUP) && 
          <SingleLineGame/>
        }

      </header>
    </div>
  );
}

export default App;
