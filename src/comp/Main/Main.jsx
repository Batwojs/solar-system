import React, { useState } from 'react'

import "./main.scss"

const Main = ( probs ) => {

  return (  
    
            <div className= "mainContainer">
                <img src = { probs.image } id="planet"/>

                <div className={probs.blank ? 'infoContainer' : 'inactive'}>
                    <h3 style={{color: 'white'}}>
                        <span id="resultInfo">{probs.info}</span>
                        yerçekim kuvveti. 
                    </h3>

                    <div>
                        <div className="circle">
                            <h2 id="circleResult">{probs.result} N</h2>
                        </div>
                    </div>
                        
                </div>

            </div>  
     
  )
}

export default Main