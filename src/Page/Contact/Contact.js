import React, {useState} from 'react';
import {Formik,Form,Field} from "formik";
import './contact.css';
import Logo from '../../assets/logoo.png';
import firebase from "../../Firebase/Firebaseconfig";
import Loding from "../../Components/Loading/Loading";
function Contact()
{
    const [SendingMessageEtat,SetSendingMessageEtat] = useState("");
    const [isLoading,Setisloading] = useState(false);
    const contactMsg = {name:"", email:"", message:""} ;
    function sendMessage (data,{resetForm})
    {
        Setisloading(true)
        let Message = firebase.database().ref("contact");
        Message.push({
            name    : data.name,
            email   : data.email,
            message : data.message
        }).then(res => {
            resetForm({});
            SetSendingMessageEtat(<div className="alert alert-success text-center" role="alert">Message was sending</div>)
            Setisloading(false);
            setTimeout(()=>{
                SetSendingMessageEtat("")
                console.log("from out setinterval")
            },5000)
        }).catch(err =>
        {
            SetSendingMessageEtat(<div className="alert alert-danger text-center" role="alert">Message not sending</div>);
            setTimeout(()=>{
                SetSendingMessageEtat("")
                console.log("from out setinterval")
            },5000)
            console.log(err);
        })
    }

    function ContactForm()
    {
        return(
            <Form>
                <div className="form-group">
                    <label htmlFor="email"> Email :</label>
                    <Field type="email" className="form-control" name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <Field type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <Field as="textarea" className="form-control" rows="5" id="message" name="message" required></Field>
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary" type="submit" disabled={isLoading} >
                        {isLoading ?<Loding taille={"1rem"} type={"border"} /> :<span ><i className="fa fa-paper-plane mr-3"></i> Send</span>}
                    </button>
                </div>

            </Form>
        )
    }

    return (
        <div className="container contant">

            <h2 className="title text-center">Contact Us</h2>
                {SendingMessageEtat}
            <div className="row mt-5">
                <div className="col contactimage">
                    <img src={Logo} alt="contact pic"/>
                </div>
                <div className="col">
                    <Formik initialValues={contactMsg} onSubmit={sendMessage}>
                        {ContactForm}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Contact;
