import React  from "react";
import './Loading.css';
function Loding (props)
{
    const style = {
        width  : props.taille  ? props.taille   : "3rem",
        height : props.taille  ? props.taille   : "3rem"
    }
    return(
        <div className="text-center">
            <div className={props.type ? "spinner-"+props.type : "spinner-grow"} style={style} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
}
export default Loding;