import React from "react";
import MatchLive from "../../Components/MatchLive/MatchLive";

function Live ()
{
    const live = {
        team_one  : "Fcb",
        team_two : "Liverpool",
        date     : "12/12/2020",
        time     : "16:00 PM"
    }
     return(
         <div className="container mb-5">
             <h1 className="title text-center">live</h1>
             <div className="row contant">
                 <MatchLive match={live} />
             </div>
         </div>
     )
}
export default Live;