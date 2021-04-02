import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BackIcon from "../elements/BackIcon";

export default function VoteGame({goBack}) {
    return (
        <>
            <BackIcon goBack={goBack}/>
            <p>Game</p>
            <ThumbUpIcon/>
            <ThumbDownIcon/>
        </>
    );
}