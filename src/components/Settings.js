import React from "react";
import BackIcon from "../elements/BackIcon";
import Switch from '@material-ui/core/Switch';
import { setData, hasNormalData, hasSexyData } from "../getters/statements";

export default function Settings({goBack, resetCounters}) {
    const [sexyData, setSexyData] = React.useState(hasSexyData);
    const [normalData, setNormalData] = React.useState(hasNormalData);

    return (
        <>
            <BackIcon goBack={() => {
                console.log(normalData, sexyData)
                setData(normalData, sexyData);
                resetCounters();
                goBack();
            }}/>
            <div style={{position: "absolute", top: "20vh", left: "0vw"}}>
                <h2 style={{width: "90vw"}}>Beállítások</h2>
                <h4 style={{textAlign: "center"}}>Az uncsibb állítások {normalData ? 'be' : 'ki'} vannak kapcsolva.</h4>
                <Switch
                    checked={normalData}
                    onChange={() => setNormalData(!normalData)}
                />
                <h4 style={{textAlign: "center"}}>Az szexi állítások {sexyData ? 'be' : 'ki'} vannak kapcsolva.</h4>
                <Switch
                    checked={sexyData}
                    onChange={() => setSexyData(!sexyData)}
                />
            </div>
            
        </>
    );
}