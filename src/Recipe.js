import React from "react";

const Recipe = ({title,calories,image,sourceurl}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt=''/>
            <p>{Math.floor(calories)}</p>
            <a href={sourceurl}>Source</a>
        </div>
    )
}

export default Recipe;