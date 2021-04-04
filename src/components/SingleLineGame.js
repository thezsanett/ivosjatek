import React from "react";
import BackIcon from "../elements/BackIcon";

export default function SingleLineGame({goBack, data, changeColor, punctuation = ""}) {
    const [statement, setStatement] = React.useState(data[0]+punctuation);
    const [index, setIndex] = React.useState(0);

    const changeStatement = () => {
        const newIndex = (index + 1) % data.length;
        setIndex(newIndex);
        setStatement(data[newIndex] + punctuation);
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