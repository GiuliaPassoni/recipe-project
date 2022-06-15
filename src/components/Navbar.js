import React from 'react';
import {useState} from "react";
import { Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

import style from '../styling/navbar.module.scss';
import logo from '../assets/logo.png';
import decoLeft2 from '../assets/decoRight2.png';
import decoRight2 from '../assets/decoLeft2.png';

export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);


    return(
        <nav className={style.navbar}>
            <Link className={style.mobileLogo} to='/'><img id='logo' src={logo} alt='logo' height={75} width={75}/></Link>
            {/*<label htmlFor='toggle'>*/}
            <button className={style.hamburger} onClick={()=> {setIsNavExpanded(!isNavExpanded)}}><FontAwesomeIcon icon={solid('burger')}/></button>
        {/*</label>*/}
            {/*<input type='checkbox' id={style['toggle']}/>*/}
            <div className={ isNavExpanded ? `${style.expanded} ${style.navMenu}` : style.navMenu}>
                <ul id='nav-list' onBlur={()=> {setIsNavExpanded(false)}}>
                    <li><Link to='/' className={style.link}  onClick={()=> {setIsNavExpanded(false)}} >About Us</Link></li>
                    <li><Link to='/recipes' className={style.link} onClick={()=> {setIsNavExpanded(false)}}>Recipes</Link></li>
                    <li id={style['nav-logo']}>
                        <Link to='/'><img id='logo' src={logo} alt='logo' height={100} width={100}/></Link>
                    </li>
                    <li><Link to='/products' className={style.link} onClick={()=> {setIsNavExpanded(false)}}>Shop</Link></li>
                    <li><Link to='/contact' className={style.link} onClick={()=> {setIsNavExpanded(false)}}>Contact Us</Link></li>
                </ul>
            </div>
            <div id={style['navbar-img']}>
                <img id={style['deco-left']} src={decoRight2} alt='deco' height={400}/>
                <img id={style['deco-right']} src={decoLeft2} alt='deco' height={400}/>
            </div>
        </nav>
    )
}