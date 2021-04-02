import React from "react";
import BackIcon from "../elements/BackIcon";

export default function DoubleLineGame({firstRow, goBack, data, changeColor}) {
    const [statement, setStatement] = React.useState(firstRow + " " + data[0] + ".");
    const [index, setIndex] = React.useState(0);

    const changeStatement = () => {
        const newIndex = (index + 1) % data.length;
        const newStatement = firstRow + " " + data[newIndex] + ".";
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
        </>
    );
}