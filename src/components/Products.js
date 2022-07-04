import style from '../styling/products.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands} from "@fortawesome/fontawesome-svg-core/import.macro";
export default function Products(){
    return(
        <section className={style.products}>
            <h1>Our Products</h1>
            <p className={style.intro}> We have prepared for you a selection of what we believe to be essential to truly cook (and eat) well. </p>
            <h3>The essentials</h3>
            <div className={style.productsAll}>
                <a href='https://www.kochkochin.com/products/enamelled-cast-iron-pot-non-stick-casserole-4-7l?variant=41671926120676&currency=GBP&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=Cj0KCQjwwJuVBhCAARIsAOPwGAT27KeFguDBVMXRW7d9DlLHM-TZGn5qgTSav_FJpvQz0FB8GFpbziMaAlGXEALw_wcB'>
                    <img alt='dutch-oven' src='https://cdn.shopify.com/s/files/1/0571/8061/8935/products/Untitled_design_8_720x.png?v=1634419827'/>
                    <div className='prod-desc'>Dutch Oven</div>
                </a>
                <a href='https://www.amazon.co.uk/Book-Patience-Ways-More-Patient/dp/1507216599'>
                    <img alt='patience' src='https://images-na.ssl-images-amazon.com/images/I/416yyZNd+5S._SX366_BO1,204,203,200_.jpg'/>
                    <div className='prod-desc'>A lot of patience</div>
                </a>
                <a href='https://www.etsy.com/uk/listing/706316840/chef-hedgehog-dog-toy-large-cute-chubby'>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                        alt='Image of cute plushy chef to represent good company to share food with'
                        src='https://i.etsystatic.com/14143404/r/il/89ac6e/3351698606/il_794xN.3351698606_iveb.jpg'/>
                    <div className='prod-desc'>Friends to eat with</div>
                </a>
                <a href='https://open.spotify.com/playlist/47Hj1ZIkQnyJInPIBjcw0B'>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img alt='Image of a Spotify cooking playlist' src='https://i.scdn.co/image/ab67706c0000bebbeec4b5eaa5f9893e6df4e25b'/>
                    <div className='prod-desc'>A great soundtrack <FontAwesomeIcon icon={brands('spotify')}/></div>
                </a>
            </div>
        </section>
    )
}