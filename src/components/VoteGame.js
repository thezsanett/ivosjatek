import React from "react";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BackIcon from "../elements/BackIcon";

export default function VoteGame({goBack, data, changeColor}) {
    const [statement, setStatement] = React.useState(data[0]);
    const [index, setIndex] = React.useState(0);

    const changeStatement = () => {
        const newIndex = (index + 1) % data.length;
        setIndex(newIndex);
        setStatement(data[newIndex]);
        changeColor();
    };

    return (
        <>
            <BackIcon goBack={goBack}/>
            <div onClick={changeStatement}>
                <h1>{statement[0]}</h1>

                <div className="vote-button">
                    <h2>{statement[1]}</h2>
                    <ThumbUpIcon/>
                </div>
                <br/>
                <div className="vote-button">
                    <h2>{statement[2]}</h2>
                    <ThumbDownIcon/>
                </div>
            </div>
            <p style={{fontSize: "20px", position: "absolute", bottom: "20px"}} >{index+1} / {data.length}</p>
        </>
    );
}