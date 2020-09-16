import React from 'react';
import Pic1 from '../../assets/kylian-mbappe.jpg';
import './Card.css';
function Card(props)
 {
     const style = {
        width:"18rem"
     }
    return (
        <div>
            <div className="card" style={style}>
                <img src={Pic1} className="card-img-top" alt="article" />
                <div className="card-body">
                    <h5 className="card-title"> {props.item.title} </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Lire Plus</a>
                </div>
            </div>
        </div>
    )
}
export default  Card;