import '../Style/header_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
import genioLogo from '../assests/images/genioLogo1.png';
import React, { useState } from 'react';


export default function Header(){
    
    const [isDropDownOpen, setDropDownOpen]= useState(false);    
    
    const handleOpen=()=>{
        setDropDownOpen(true);
    
    }

    const handleClose=()=>{
        setDropDownOpen(false);
    }

    return(
        <header>
            <div className='header'>
                <div className='header-left'>
                        <FontAwesomeIcon icon={faPhone} className='icon'/>
                        <span>TEL : 999 999 0099</span>
                </div>
                <div className='header-right'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                        <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                        <FontAwesomeIcon icon={faFacebook} className='icon'/>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/>
                        <span>Login</span>
                </div>           
            </div>
            <div className='navbar'>
                <div className='logo'>
                    <img src={genioLogo} alt="Genio Logo"/>
                </div>
                <nav>
                    <ul>
                        <li><a href="/" aria-label='Home'>HOME</a></li>
                        <li><a href="/" aria-label='ABOUT US'>ABOUT US</a></li>
                        <li><a href="/" aria-label='K-12'>K 12</a></li>
                        <li><a href="/" aria-label='SCHOOLS'>SCHOOLS</a></li>
                        <li><a href="/" aria-label='COMPETITIONS'>COMPETITIONS</a></li>                      
                        <li className="countryDropdown" onMouseEnter={handleOpen} onMouseLeave={handleClose}> 
                            <a href="/country">COUNTRY<FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
                            {isDropDownOpen && (
                                <ul className='dropdownMenu'>
                                    <li>Canada</li>
                                    <li>United States</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

       