import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function BackIcon({goBack}) {
    return (
        <div className="circle" onClick={goBack} >
            <ArrowBackIosIcon 
                style={{
                    transform: "translate(0.5vh, 2.5vh)", 
                }}
            />
        </div>
    );
}