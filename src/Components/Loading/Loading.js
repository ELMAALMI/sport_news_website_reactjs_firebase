import React  from "react";
import Loading from "../../assets/loading.svg";
import './Loading.css';
function Loding (props)
{
    return(
        <div className={props.full ? 'fullscreen loading_out' : "fullscreen"}>
            <div className="container mt-12">
                <img src={Loading} alt="loading"
                     className={props.full ? 'loading_image ml' : "loading_image ml-componant"}
                />
            </div>
        </div>

    )
}
export default Loding;