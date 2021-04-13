import React from "react";
import BackIcon from "../elements/BackIcon";

export default function DoubleLineGame({
    firstRow, 
    punctuation = "",
    goBack, 
    dataLength, 
    changeColor,
    getCurrentData,
    starterStatement,
    index
}) {
    const [statement, setStatement] = React.useState(firstRow + " " + starterStatement + punctuation);

    const changeStatement = () => {
        const newStatement = firstRow + " " + getCurrentData() + punctuation;
        setStatement(newStatement);
        changeColor();
    }

    return (
        <>
            <BackIcon goBack={goBack}/>
            <div onClick={changeStatement} className="statement-div">
                <h1>{statement}</h1>
            </div>
            <p style={{fontSize: "20px", position: "absolute", bottom: "20px"}} >{index+1} / {dataLength}</p>
        </>
    );
}