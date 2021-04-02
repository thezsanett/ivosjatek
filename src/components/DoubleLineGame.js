import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function DoubleLineGame({goBack}) {
    return (
        <>
            <ArrowBackIosIcon onClick={goBack} style={{cursor: "pointer"}}/>
            <p>DBLGame</p>
        </>
    );
}