import React, {useEffect, useState} from 'react';
import Image from "../components/Image.jsx";
import {Heading2, ImageSection} from "../components/styled/section.styled";
import LoadingIcon from "../assets/svgs/loadingIcon.jsx";
import {LoaderSection} from "../components/styled/loaderSection.styled.js";

function ImagesPage() {

    const [images, setImages] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const [totalResults, setTotalResults] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [favoritedImages, setFavoritedImages] = useState(JSON.parse(localStorage.getItem("selected") || '[]'));

    //picture fetch from API function
    const fetchPhotos = (signal) => {
        setError("");
        setLoading(true);
        const options = {
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: "HKcNCMkFKPMPn3BmGKOa63hnEhK4fO7ivu0UorGQkhxuhPvwOldK9xwU"
            },
            signal
        };
        //API returns total results possible, if images array length meets the value, fetch won't be called
        if (images.length !== 0 && images.length >= totalResults) return;
        fetch(`https://api.pexels.com/v1/curated?page=${nextPage}&per_page=40`, options)
            .then(res => res.json())
            .then(data => {
                setImages(prevState => [...prevState, ...data.photos]);
                setNextPage(prevState => prevState + 1);
                setTotalResults(data.total_results);
            })
            .catch(error => signal.aborted ? console.log("successfully aborted") : setError(error))
            .finally(() => setLoading(false))
    }

    //first fetch to show pictures
    //abort controller for aborting fetches when component unmounts without fetch finishing
    useEffect(() => {
        const controller = new AbortController();
        const {signal} = controller;
        fetchPhotos(signal);
        return () => {
            controller.abort();
        }
    }, [])


    //document.body.offsetHeight size of the whole body
    //document.documentElement.scrollTop size in pixels scrolled vertically
    //window.innerHeight size in pixels of viewport
    const scrollHandler = (signal) => {
        //(document.documentElement.scrollTop + window.innerHeight - 50) scrolled vertically + window viewport - 50px for <h1> top margin
        if (document.body.offsetHeight !== document.documentElement.scrollTop + window.innerHeight - 50 || loading) return;
        console.log("scrl")
        fetchPhotos(signal);
    };

    useEffect(() => {
        const controller = new AbortController();
        const {signal} = controller;
        //function so that signal argument could be passed and listener removed correctly
        const scrollEventFunc = function () {
            scrollHandler(signal);
        }
        window.addEventListener('scroll', scrollEventFunc);
        return () => {
            window.removeEventListener('scroll', scrollEventFunc)
            controller.abort();
        };
    }, [nextPage]);

    const addImage = id => {
        let favoritedImagesCopy = JSON.parse(localStorage.getItem("selected") || '[]');
        //if imageID is present, remove from the selected images array, if not present add
        if (favoritedImagesCopy.filter(item => item === id).length === 1) {
            favoritedImagesCopy = favoritedImagesCopy.filter(item => item !== id)
        } else {
            favoritedImagesCopy.push(id);
        }
        setFavoritedImages(favoritedImagesCopy);
        localStorage.setItem("selected", JSON.stringify(favoritedImagesCopy));

        // setImages(images.map((el, index) => {
        //     if (el.id === id) {
        //         el.liked = !el.liked
        //     }
        //     return el;
        // }))

            // //if imageID is present, remove from the selected images array, if not present add
            // if (favoritedImages.filter(item => item === id).length === 1) {
            //     setFavoritedImages(favoritedImages.filter(item => item !== id))
            // } else {
            //     setFavoritedImages(prevState => [...prevState, id])
            // }
            // console.log(favoritedImages);
    };

    // useEffect(() => {
    //     console.log("run")
    //     localStorage.setItem("selected", JSON.stringify(favoritedImages))
    // }, [favoritedImages])

    return (
        <>
            <ImageSection>
                {error ? <Heading2>Request failed with code: {error}</Heading2> : null}
                {console.log("rerer", images[0])}
                {/*filter images, so no duplicates render*/}
                {images.filter((item, index) => index === images.findIndex(item2 => item2.id === item.id))
                    .map(el => {
                        return (
                            <Image key={el.id} photographer={el.photographer} isLiked={favoritedImages.includes(el.id)}
                                   addImage={() => addImage(el.id)} id={el.id}
                                   src={el.src.tiny}
                                   alt={el.alt}/>
                        );
                    })}
            </ImageSection>
            <LoaderSection>
                {loading ? <LoadingIcon/> : null}
            </LoaderSection>
        </>
    );
}

export default ImagesPage;