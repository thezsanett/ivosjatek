import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function SingleLineGame({goBack}) {
    return (
        <>
            <ArrowBackIosIcon onClick={goBack} style={{cursor: "pointer"}}/>
            <p>Game</p>
        </>
    );
}