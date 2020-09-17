import React from 'react';
import './SingleLive.css';
import top_picture from '../../assets/match-detail.jpg';
import fcb from '../../assets/Barcelona.jpg';
import liverpool from '../../assets/Liverpoo.jpg';
import Resume from "../../Components/Resume/Resume";
function SingleLive(props)
{
    const live_id = props.match.params.id ;
    const style = {
        backgroundImage: "url(" + top_picture + ")",
    }
    return (
        <div className="container single_live">
            <div className="top_page" style={style}>
                <div className="row mb-5" >
                    <div className="col text-center ">
                        <span className="live_date">Le 23 / 04 / 2020</span>
                    </div>
                </div>
                <div className="row">
                    <div className="HMatch1" >
                        <div className="HMatchTeam">
                            <img src={fcb} alt="first_team"/>
                            <p>Fcb</p>
                        </div>
                        <div className="HMatchInfo">
                            <span className="Score1">0</span>
                            <span className="Score2">0</span>
                            <div className="HmatchesIcons text-center"></div>
                            <p className="two_point"> : </p>

                        </div>
                        <div className="HMatchTeam">
                            <img src={liverpool} alt="second_team"/>
                            <p>
                                Liverpool
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-5">
                    <div className="col text-center">
                        <span className="live_time">GTM 16:00 PM <i className="fa fa-clock-o"></i> </span>
                    </div>
                </div>
            </div>
            <div className="contant container text-center">
                <div className="row">
                    <iframe width="1000" height="315" src="https://www.youtube.com/embed/6TY-6GSca1A" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
            <div className="mt-3">
                <Resume />
            </div>
        </div>
    )
}
export default SingleLive;