import React, {  useState, useEffect } from 'react'

export default function Preloader (props) {

    // const [isPreload, SetIsPreload] = useState(false)
    useEffect(() => { props.resetPreloadCounter() }, [props.refreshPreloadStatus(props.saved)])
    useEffect(() => { props.refreshPreloadStatus(props.saved) }, [])

    function setPreload(){
        props.preload(true)
        props.refreshPreloadStatus(props.saved)
    }

    function preloadBtn() {
        console.log(props.preloadStatus)
       if (props.preloadStatus) {
        return (
                <span className="preloader__round" >Больше фильмов нет...</span>
                )
       } else {
            return(
                <span className="preloader__round" onClick={setPreload}>Еще</span>
                )
       }
    }

    return (
        <div className="preloader">
            <div className="preloader__container">
                {preloadBtn()}
            </div>
        </div>
    )
};


