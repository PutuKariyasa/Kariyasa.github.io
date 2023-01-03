import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import about1 from "../assets/prj3.jpg"
import about2 from "../assets/prj4.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who I am</h1>
            <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={about1} className="img" alt="true" />
                </div>

                <div className="img-stack bottom">
                    <img src={about2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent