import React, {  useState } from 'react'

export default function Preloader (props) {

    const [isPreload, SetIsPreload] = useState(false)

    function setPreload(){
        props.preload(true)
    }

    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round" onClick={setPreload}>Еще</span>
            </div>
        </div>
    )
};


