import React from 'react';
import './contact.css';
import Logo from '../../assets/logoo.png';
function Contact()
{
   function send (e)
   {
       e.preventDefault();
       console.log(e.target.email.value)
   }
    return (
        <div className="container contant">
            <h2 className="title text-center">Contact Us</h2>   
            <div className="row mt-5">
                <div className="col contactimage">
                    <img src={Logo} alt="contact pic"/>
                </div>
                <div className="col">
                    <form onSubmit={send}>
                        <div className="form-group">
                            <label htmlFor="email"> Email :</label>
                            <input type="text" className="form-control" name="email" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" name="name" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message :</label>
                            <textarea className="form-control" rows="5" id="message"></textarea>
                        </div>
                        <div className="form-group">
                            <button className="form-control btn btn-primary" type="submit">
                                 <i className="fa fa-paper-plane mr-3"></i> Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
