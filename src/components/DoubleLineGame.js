import React from "react";
import BackIcon from "../elements/BackIcon";

export default function DoubleLineGame({
    firstRow, 
    punctuation = "",
    goBack, 
    data, 
    changeColor
}) {
    const [statement, setStatement] = React.useState(firstRow + " " + data[0] + punctuation);
    const [index, setIndex] = React.useState(0);

    const changeStatement = () => {
        const newIndex = (index + 1) % data.length;
        const newStatement = firstRow + " " + data[newIndex] + punctuation;
        setIndex(newIndex);
        setStatement(newStatement);
        changeColor();
    }

    return (
        <>
            <BackIcon goBack={goBack}/>
            <div onClick={changeStatement} className="statement-div">
                <h1>{statement}</h1>
            </div>
            <p style={{fontSize: "20px", position: "absolute", bottom: "20px"}} >{index+1} / {data.length}</p>
        </>
    );
}