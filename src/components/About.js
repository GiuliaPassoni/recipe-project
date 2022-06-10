import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' //
import style from './about.module.scss';

export default function About(){
    return(
        <section id='about' className={style.about}>
            <h1 id='about-title'>Oh hello!</h1>
            <h2 id='about-sub'>Welcome to yet another cooking blog</h2>
            <p id='about-text'>
                Do you often feel overwhelmed by the amount of food bloggers on the web? <br /> Are there really that many results from your Google search for quick veggie salad? <br />
                Well, you've come to the right place! <br />
                ...well, not really. This API is a bit limited, but hey, I did my best to make it look pretty. And to make it work, too!
            </p>
            <p className='disclaimer'>
                <strong>Disclaimer.</strong> The style of this website is inspired by my all-time favourite food blog, <a href='https://www.pickuplimes.com/'>Pick Up Limes</a>. If they ever came across this page, I'd love them to know how much I love their content and style. You people are great <FontAwesomeIcon icon={solid('heart')}/>
            </p>
            <p> And of course, thanks for passing by!</p>
            <p className={style.signature}>Giulia</p>
        </section>
        )
}