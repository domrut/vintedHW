import React from 'react';
import {Cover, ImageStyled} from "./styled/image.styled";

function Image({id, src, alt, photographer, addImage, isLiked}) {
    //responsive image solution that would allow to load higher quality images on demand
    //API provides src object that has entries with different images sizes
    //could be accomplished using src set i.e. srcSet={`${src.tiny} 640w, ${src.large} 768w, ${src.original} 1200w`}
    //the API provided images have different aspect ratios, so for the sake of design shown in homework task, only "tiny" images are used
    return (
        <ImageStyled>
            <img
                src={src}
                width="280px" height="200px" alt={alt ? alt : "Curated photo from pexels.com"}/>
            <Cover>
                {console.log("rendered")}
                <p>{alt ? alt : "No picture name"}</p>
                <p>{photographer ? photographer : "No author"}</p>
                <button onClick={() => addImage(id)}>{isLiked ? "Unfavourite" : "Favourite"}</button>
            </Cover>
        </ImageStyled>
    );
}
//react.memo so that only components whose liked prop has changed are re-rendered
export default React.memo(Image, (props, nextProps) => {
    if (props.isLiked === nextProps.isLiked) {
        return true;
    }
});