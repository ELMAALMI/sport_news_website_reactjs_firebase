import React from 'react'
import './Chanelle.css';
function Chanelle() 
{
    var i = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="contant chanelle mt-4">
            <h2 className="title text-center">Live Chanelle</h2>
            {
                i.map(item=>{
                    return( 
                        <img className="col-2 mt-1" key={item} src={`img/${item}.png`} alt="bein sport" />
                     )
                })
            }
        </div>
    )
}
export default Chanelle;