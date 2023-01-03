import "./SkillsStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Skills = () => {
  return (
    <div className="skill">
        <div className="card-container">
            <div className="card">
                <h3>Front End Basic</h3>
                <span className="bar"></span>
                <p className="btc">Road Map</p>
                <p>~ HTML ~</p>
                <p>~ CSS ~</p>
                <p>~ JavaScript ~</p>
                <p>~ Bootstrap ~</p>
                <Link to="/contact" className="btn">Learn more</Link>
            </div>

            <div className="card">
                <h3>Back End Basic</h3>
                <span className="bar"></span>
                <p className="btc">Road Map</p>
                <p>~ Python ~</p>
                <p>~ Java ~</p>
                <p>~ PHP ~</p>
                <p>~ Build Project ~</p>
                <Link to="/contact" className="btn">learn more</Link>
            </div>

            <div className="card">
                <h3>Build project from scratch</h3>
                <span className="bar"></span>
                <p className="btc">****</p>
                <p>~ Responsive website ~</p>
                <p>~ Calculator ~</p>
                <p>~ Simple Game ~</p>
                <p>~ Portfolio ~</p>
                <Link to="/contact" className="btn">Learn more</Link>
            </div>

        </div>
    </div>
  )
}

export default Skills