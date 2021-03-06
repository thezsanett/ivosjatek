import React from "react";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BackIcon from "../elements/BackIcon";

export default function VoteGame({
    goBack, 
    dataLength, 
    changeColor,
    getCurrentData,
    starterStatement,
    index
}) {
    const [statement, setStatement] = React.useState(starterStatement);

    const changeStatement = () => {
        const newStatement = getCurrentData();
        setStatement(newStatement);
        changeColor();
    };

    return (
        <>
            <BackIcon goBack={goBack}/>
            <div onClick={changeStatement}>
                <h1>{statement[0]}</h1>

                <div className="vote-button">
                    <h3>{statement[1]}</h3>
                    <ThumbUpIcon/>
                </div>
                <br/>
                <div className="vote-button">
                    <h3>{statement[2]}</h3>
                    <ThumbDownIcon/>
                </div>
            </div>
            <p style={{fontSize: "20px", position: "absolute", bottom: "20px"}} >{index+1} / {dataLength}</p>
        </>
    );
}