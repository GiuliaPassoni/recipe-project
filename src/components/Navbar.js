import React from 'react';
import {useState} from "react";
import { Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

import style from '../styling/navbar.module.scss';
import logo from '../assets/logo.png';
import decoLeft from '../assets/decoRight.png';
import decoRight from '../assets/decoLeft.png';

export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);


    return(
        <nav className={style.navbar}>
            <Link className={style.mobileLogo} to='/'><img id='logo' src={logo} alt='logo' height={78} width={80}/></Link>
            {/*<label htmlFor='toggle'>*/}
            <button className={style.hamburger} onClick={()=> {setIsNavExpanded(!isNavExpanded)}}><FontAwesomeIcon icon={solid('burger')}/></button>
        {/*</label>*/}
            {/*<input type='checkbox' id={style['toggle']}/>*/}
            <div className={ isNavExpanded ? `${style.expanded} ${style.navMenu}` : style.navMenu}>
                <ul id='nav-list'>
                    <li><Link to='/' className={style.link}>About Us</Link></li>
                    <li><Link to='/recipes' className={style.link}>Recipes</Link></li>
                    <li id={style['nav-logo']}>
                        <Link to='/'><img id='logo' src={logo} alt='logo' height={100} width={100}/></Link>
                    </li>
                    <li><Link to='/products' className={style.link}>Shop</Link></li>
                    <li><Link to='/contact' className={style.link}>Contact Us</Link></li>
                </ul>
            </div>
            <div id={style['navbar-img']}>
                <img id={style['deco-left']} src={decoRight} alt='deco' height={400}/>
                <img id={style['deco-right']} src={decoLeft} alt='deco' height={400}/>
            </div>
        </nav>
    )
}