import style from '../styling/products.module.scss';

export default function Products(){
    return(
        <section className={style.products}>
            <h1>Our Products</h1>
            <p>Here is a selection of the products we mostly recommend.</p>
            <div className="products-all">
                Here there will be all the cool products we offer!
            </div>
        </section>
    )
}