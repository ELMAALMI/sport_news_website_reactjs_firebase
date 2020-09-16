import React from 'react'
import Logo from '../../assets/logoo.png';
import './Footer.css';
function Footer() {
    return (
    <footer className="py-5 mt-3">
        <div className="container text-center">
            <a href="https://componentity.com" target="_blank">
                <img  src={Logo} alt="logo" />
            </a>
            <p className="text-secondary col-md-9 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus soluta veritatis sunt est veniam, rem neque impedit rerum aliquid iste  dolores laboriosam?</p>
            <hr className="my-5" />
            <div className="mb-3">
                <a href="/#" className="mx-1">
                    <i className="fa fa-facebook-square"></i>
                </a>
                <a href="/#" className="w-6 mx-1">
                    <i className="fa fa-twitter-square"></i>
                </a>
                <a href="/#" className="w-6 mx-1">
                    <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="/#" className="w-6 mx-1">
                    <i className="fa fa-github"></i>
                </a>
                <a href="/#" className="w-6 mx-1">
                    <i className="fa fa-google-wallet"></i>
                </a>
            </div>
            <a href="/" target="_blank">
                <p className="text-secondary text-font-6" >Copyright 2020. All rights reserved! ELSB</p>
            </a>
        </div>
    </footer>
    )
}

export default Footer;
