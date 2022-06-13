import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import style from '../styling/contact.module.scss';

export default function Contact(){
    return(
        <section className={style.contact}>
            <h1>Get in touch</h1>
            <article className={style.feedback}>
                <h3>Have you got some feedback for us?</h3>
                <p>We highly value your support, and we would be grateful for any comment you would like to share with us.</p>
                <ul>
                    <li>Did you try any of these recipes? Let us know!</li>
                    <li>Is there anything else you would like to see on this website?</li>
                    <em>Most importantly:</em>
                    <ul>
                        <li>How would you rate the frontend part of this website?</li>
                        <li>Did you find any <FontAwesomeIcon icon={solid('bug')}/>?</li>
                    </ul>
                </ul>
                <p> Thank you so much for your support!</p>
            </article>
            <article className={style.findUs}>
                <h3>Come say hi!</h3>
                <div className={style.flexbox}>
                    <div className={style.maptext}>
                        <p>Would you like to see us in person?</p>
                        <p>Alas, this may not be possible. However, to cheer you up, we recommend to check out this fabulous Dutch apple cake at <a href='http://www.winkel43.nl/'>Winkel 43</a>*.</p>
                        <br/>
                        <p>*<strong>Disclaimer</strong>: they are also not a sponsor.</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28360.327334451576!2d4.881604541568182!3d52.38200822981759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3db9b09718b7bc2!2sWinkel%2043!5e0!3m2!1sen!2suk!4v1655112194828!5m2!1sen!2suk"
                        // width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
                        // referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </article>
        </section>
    )
}