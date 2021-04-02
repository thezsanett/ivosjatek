import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function BackIcon({goBack}) {
    return (
        <div className="circle">
            <ArrowBackIosIcon 
                onClick={goBack} 
                style={{
                    transform: "translateX(3px)", 
                }}
            />
        </div>
    );
}