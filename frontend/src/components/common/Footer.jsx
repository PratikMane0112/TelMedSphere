import React from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';
import { TfiAngleRight } from "react-icons/tfi";
import logo from "../../assets/header.png"

const Footer = () => { 

    return (
        <footer id="footer">
            <div className="container">
                <div className="wrapper footer_wrapper">
                    <div className="foot_about">
                        <div className='foot_logo_div'>
                        <Link to="/"><img src={logo} alt='footer-logo' width="230px" height="230px" /></Link>
                        </div>
                    </div>

                    {
                        footMenu.map(item => {
                            const { id, title, menu } = item;
                            return (
                                <div className="foot_menu" key={id}>
                                    <h4>{title}</h4>
                                    <ul>
                                        {
                                            menu.map(item => {
                                                const { id, link, path } = item;
                                                return (
                                                    <li key={id}>
                                                        <TfiAngleRight className='arrow-icon'/> <Link to={path}>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                        {localStorage.getItem("usertype")==="patient" && title==="Shop & More" &&  (
                                            <li>
                                                <TfiAngleRight className='arrow-icon' /> <Link to="/doctors">Book an Appointment</Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="separator"></div>

            <div className="sub_footer">
                <div className="container">
                    <div className="sub_footer_wrapper">
                         
                        <div className="foot_social">
                            {
                                footSocial.map((item) => {
                                    const { id, icon, cls, path } = item;
                                    return (
                                        <Link to={path} key={id} className={`icon {cls}`}>{icon}</Link>
                                    );
                                })
                            }
                        </div>
                        <div className="foot_copyright">
                            <p>
                                2024 @ <a href="/">TelMedSphere</a> | All Rights Reserved. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;