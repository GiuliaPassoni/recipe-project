import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' //

import style from '../styling/about.module.scss';
// import cookingAside from '../assets/cookingAside.png'


export default function About(){
    return(
        <section id='about' className={style.about}>
            <h1 id='about-title'>Oh hello!</h1>
            <h2 id='about-sub'>Welcome to yet another cooking blog <FontAwesomeIcon icon={solid('cookie-bite')}/></h2>
            <div className='txt-img'>
                <div className='par-cont'>
                    <p id='about-text'>
                        <p>Do you often feel <b>overwhelmed</b> by the amount of food bloggers on the web? <br/>
                            Are there really that many results from your Google search for <em>quick veggie salad</em>? </p>
                        <p className={style.exc}>Well, you've come to the right place! </p>
                        <p className={style.notexc}>...I mean, not really. This API is a bit limited, but hey, I did my best to make it look pretty. And to make it work, too!</p>
                    </p>
                    <p className='disclaimer'>
                        <strong>Disclaimer.</strong> The style of this website is inspired by my all-time favourite <a href='https://www.pickuplimes.com/'>Pick Up Limes</a>. If they ever came across this page, I'd love them to know how much I love their content and style. You people are great <FontAwesomeIcon icon={solid('heart')}/>
                    </p>
                </div>
               {/*<img id='cooking' src={cookingAside} alt='Cute cooking image' height={500} width={500}/>*/}
            </div>
            <p> And of course, thanks for passing by!</p>
            <p className={style.signature}>Giulia</p>
        </section>
        )
}