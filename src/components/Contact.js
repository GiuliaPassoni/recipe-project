import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import style from '../styling/contact.module.scss';

export default function Contact(){
    return(
        <section className={style.contact}>
            <h1>Get in touch</h1>
            <h3>Have you got some feedback for us?</h3>
            <p>We highly value your support, and we would be grateful for any comment you would like to share with us.</p>
            <ul>
                <li>Did you try any of these recipes? Let us know!</li>
                <li>Is there anything else you would like to see on this website?</li>
                <em>Most importantly:</em>
                <ul>
                    <li>How would you rate the frontend part of this website?</li>
                    <li>did you find any <FontAwesomeIcon icon={solid('bug')}/>?</li>
                </ul>
            </ul>
            <p> Thank you so much for your support!</p>
        </section>
    )
}