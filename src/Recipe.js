import React from "react";

const Recipe = ({title,calories,image,sourceurl}) => {
    // if (title.length > 20){
    //     title = title.slice(0,20)+'...'
    // }
    // title.length <20 ? title : title.substring(0,20)+'...';
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    title = capitalizeFirstLetter(title);
    return(
        <div className='recipe-cont'>
            <a href={sourceurl} target='_blank' rel="noreferrer">
                {/*<h1>{title}</h1>*/}
                <img src={image} alt={title} loading="lazy"/>
                <h1>{title.length < 20 ? `${title}` : `${title.substring(0, 25)}...`}</h1>
                {/*<div className='recipe-info'>*/}
                    {/*<p>{Math.floor(calories)}</p>*/}
                    <span>Source</span>
                {/*</div>*/}
            </a>
        </div>
    )
}

export default Recipe;