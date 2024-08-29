import React, { useEffect, useState } from 'react'
import Main from '../Main/Main';
import Earth  from '../../images/earth.png'
import Mars  from '../../images/mars.png'
import Jupiter  from '../../images/jupiter.png'
import "./nav.scss"

const Nav = () => {

  const [kg , setKg] = useState();
  const [mass , setMass] = useState(9.81);
  const [result, setResult] = useState(0);
  const [blank, setBlank] = useState(false);
  const [image, setImage] = useState(Earth);
  const [info, setInfo] = useState("?.. ");
  
  const calculateMass = () => {
    setResult((kg * mass).toFixed(2));
    if (mass == 3.71) {
      setImage(Mars)
      setInfo("Mars'ın ")
    } else if (mass == 24.79) {
      setImage(Jupiter)
      setInfo("Jüpiter'in ")
    } else {
      setImage(Earth)
      setInfo("Dünya'nın ")
    }
  }

  useEffect(() => {
    if (result == 0 || result == null) {
      setBlank(false);
    } else {
      setBlank(true);
    }

    console.log("test");
  }, [result]);


  return (
    <div className='navContainer'>

     
        <h1>Yer çekim kuvvetini hesaplama</h1>
        
        <div className="buttons">

            <input type="number" id="numb" min="1" placeholder="Kg.."
            onChange={(e) => setKg(+e.target.value)}/>

            <select id="global"
            onChange={(e) => setMass(e.target.value)} >
                <option value={9.81}>Dünya</option>
                <option value={3.71}>Mars</option>
                <option value={24.79}>Jupiter</option>
            </select>

            <button onClick={calculateMass}>Calculate weight</button>
            {/* <p style={{color : 'white'}}>Total: {result || ""}</p> */}


        </div>
      

      <div>
            <Main result = { result } blank = { blank }  image = { image } info = { info }/>
      </div>

    </div>
  )
}

export default Nav