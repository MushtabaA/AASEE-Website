import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return(
        <div className="main-footer">
            <div className ="container">
                <div className="row">
               {/* Coulmn1 */}
               <div className = "col">
                   <h5>OFFICE LOCATION</h5>
                   <ul className="list-unstyled">
                    <li>Room # ENA 229L</li>
                    <li>Schulich School of Engineering</li>
                    <li>University of Calgary</li>
                   </ul>
               </div>
               {/* Coulmn2 */}
               <div className="col">
                   <h4>The students were thoroughly engaged as they designed, constructed and tested their structures.
                                                                         -Teacher</h4>
               </div>
               {/* Coulmn3 */}
               <div className = "col">
                   <h5>Content</h5>
                   <ul className="list-unstyled">
                    <li><a href="/">HOME</a></li>
                    <li> <a href="/what_we_do">WHAT WE DO</a></li>
                    <li> <a href="/get_involved">GET INVOLVED</a></li>
                    <li> <a href="/about">ABOUT</a></li>
                    <li> <a href="/contact">CONTACT</a></li>
                    <li> <a href="/donate">DONATE</a></li>
                   </ul>
               </div>
               <hr />
                </div>
                <div className="row">
                <p className="col-sm">
                  Copyright  &copy;{new Date().getFullYear()}  AASEE | Privacy Policy | Site by Build Studio | Registered Charity # 1234567890
                </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;