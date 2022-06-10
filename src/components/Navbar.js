import React from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";

import style from './navbar.module.scss';
import logo from './logo.png';
import decoLeft from './decoRight.png';
import decoRight from './decoLeft.png';

export default function Navbar(){
    return(
        <nav className={style.navbar}>
            <ul id='nav-list'>
                {/*<li><Link to='/'>About Us</Link></li>*/}
                {/*<li><Link to='/recipes'>Recipes</Link></li>*/}
                {/*<li id='nav-logo'>*/}
                {/*    <img id='logo' src={logo} alt='logo' height={100} width={100}/>*/}
                {/*</li>*/}
                {/*<li><Link to='/shop'>Shop</Link></li>*/}
                {/*<li><Link to='/contact'>Contact Us</Link></li>*/}
            </ul>
            <div id={style['navbar-img']}>
                <img id={style['deco-left']} src={decoRight} alt='deco' height={400}/>
                <img id={style['deco-right']} src={decoLeft} alt='deco' height={400}/>
            </div>
        </nav>
    )
}