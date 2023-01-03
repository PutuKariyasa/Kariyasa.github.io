import "./FooterStyles.css"

import React, { useState } from 'react'

import { FaHome, FaPhone, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"
import {MdEmail} from "react-icons/md"

const Footer = () => {
    const [facebookColor, setFacebookColor] = useState('#fff');
    const [twitterColor, setTwitterColor] = useState('#fff');
    const [githubColor, setGithubColor] = useState('#fff');
    const [emailColor, setEmailColor] = useState('#fff');

    return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}} />
                    <div>
                        <p>Ota-Ku Tokyo</p>
                        <p>Japan.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}} />000 0000 0000</h4>
                </div>
                <div className="email">
                    <a href="https://www.gmail.com" target="-blank" ><h4><MdEmail size={20} style={{color: emailColor, marginRight: "2rem" }} onMouseEnter={() => setEmailColor('#fa0033')} onMouseLeave={() => setEmailColor('#fff')} />test@mail.com</h4></a>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>Learn React JS Completely from scratch in this 2:30hrs Crash Course. This course is designed specially for new web developers, who just started to learn react js. In this course we will build a complete portfolio website using react js.</p>

                <div className="social">
                    <a href="https://www.facebook.com" target="-blank" onMouseEnter={() => setFacebookColor('#0077FF')} onMouseLeave={() => setFacebookColor('#fff')} ><FaFacebook size={30} style={{ color: facebookColor, marginRight: '1rem' }} /></a>
                    <a href="https://www.twitter.com" target="-blank" onMouseEnter={() => setTwitterColor('#1DA1F2')} onMouseLeave={() => setTwitterColor('#fff')} ><FaTwitter size={30} style={{ color: twitterColor, marginRight: '1rem' }} /></a>
                    <a href="https://www.github.com" target="-blank" onMouseEnter={() => setGithubColor('#6e5494')} onMouseLeave={() => setGithubColor('#fff')} ><FaGithub size={30} style={{ color: githubColor, marginRight: '1rem' }} /></a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer