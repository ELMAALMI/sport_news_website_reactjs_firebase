import React from "react";
import './MatchLive.css';
import fcb from '../../assets/Barcelona.jpg';
import liverpool from '../../assets/Liverpoo.jpg';
import more from '../../assets/plus.png';
import {Link} from "react-router-dom";
function MatchLive (props)
{
    return(
        <div className="HMatch1" >
            <div className="HMatchTeam">
                <img src={fcb} alt="first_team"/>
                <p>{props.match.team_one}</p>
            </div>
            <div className="HMatchInfo">
                <span id="Score1">
                    0
                </span>
                <span id="Score2">
                    0
                </span>
                <p>
                    {props.match.time}
                </p>
                <div className="HmatchesIcons">
                    <Link to="live/1">
                        <img src={more} alt="more" width={"155px"}/>
                    </Link>
                </div>
            </div>
            <div className="HMatchTeam">
                <img src={liverpool} alt="second_team"/>
                    <p>
                        {props.match.team_two}
                    </p>
            </div>
        </div>
    )
}
export default MatchLive;