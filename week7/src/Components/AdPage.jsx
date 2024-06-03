import React, { useState } from 'react'
import Ad from './Ad.jsx';

export default function Adpage() {
    const [showAd, setshowAd] = useState(true);

    const changeshowAd = () =>{
        setshowAd(!showAd);
    }

    return (
        <div>
            <Ad showAd={showAd}/>
            <button onClick={changeshowAd}>{showAd ? '광고 안 보기' : '광고 보기'}</button>
        </div>
    )
}