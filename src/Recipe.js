import React from "react";

const Recipe = ({title,calories,image,sourceurl}) => {
    // if (title.length > 20){
    //     title = title.slice(0,20)+'...'
    // }
    // title.length <20 ? title : title.substring(0,20)+'...';
    return(
        <div className='recipe-cont'>
            <a href={sourceurl} target='_blank' rel="noreferrer">
                {/*<h1>{title}</h1>*/}
                <img src={image} alt=''/>
                <h1>{title.length < 20 ? `${title}` : `${title.substring(0, 25)}...`}</h1>
                <div className='recipe-info'>
                    {/*<p>{Math.floor(calories)}</p>*/}
                    <span>Source</span>
                </div>
            </a>
        </div>
    )
}

export default Recipe;