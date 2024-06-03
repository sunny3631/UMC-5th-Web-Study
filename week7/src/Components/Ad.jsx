import React from 'react'
import { ReactComponent as AdImg } from "../img/Untitled.svg"
export default  function Ad(props) {
    if (!props.showAd) {
      return null;
    }
  
    return (
    <div>
        <AdImg/>
    </div>
    );
  }