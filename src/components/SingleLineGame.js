import BackIcon from "../elements/BackIcon";

export default function SingleLineGame({goBack}) {
    return (
        <>
            <BackIcon goBack={goBack}/>
            <p>Game</p>
        </>
    );
}