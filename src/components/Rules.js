import React from "react";
import BackIcon from "../elements/BackIcon";

export default function Rules({goBack}) {

    return (
        <>
            <BackIcon goBack={goBack}/>
            <div>
                <h2>Én még soha</h2>
                <h4>Ha igaz rád az állítás, akkor nem iszol. Tehát azok isznak, akik csinálták már az adott dolgot.</h4>
                <h2>Szavazás</h2>
                <h4>Mindenki egyszerre szavaz. A kisebbségben lévők isznak. Ha mindenki ugyanarra szavaz, mindenki iszik.</h4>
                <h2>Felelsz vagy iszol</h2>
                <h4>Dönthetsz, hogy megválaszolod-e a kérdést vagy inkább iszol. Ha nem tudsz válaszolni, akkor is innod kell! Egy-egy kérdésnél mindenkinek innia vagy válaszolnia kell!</h4>
                <h2>Igyon az, aki...</h2>
                <h4>Mindenkinek innia kell egy kortyot, akire vonatkozik a kártyán lévő állítás.</h4>
                <h2>King's cup</h2>
                <h4>Körben megyünk, mindig a soron lévő játékos hajtja vagy hajtatja végre a feladatot.</h4>
            </div>
            
        </>
    );
}