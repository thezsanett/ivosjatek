import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function VoteGame({goBack}) {
    return (
        <>
            <ArrowBackIosIcon onClick={goBack} style={{cursor: "pointer"}}/>
            <p>Game</p>
            <ThumbUpIcon/>
            <ThumbDownIcon/>
        </>
    );
}