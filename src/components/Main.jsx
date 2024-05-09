import {useRef, useEffect, useState} from 'react'

const Main = () => {
 let [inp, setInp] = useState("1")
 let [toggleBox, setToggleBox] = useState(false)

 let pageviews = inp === "0" ? "10K":
    inp === "1" ? "50K":
    inp === "2" ? "100K":
    inp === "3"? "500K":
    inp === "4" ? "1M" : ""

 let price = inp === "0" ? "8":
    inp === "1" ? "12":
    inp === "2" ? "16":
    inp === "3" ? "24":
    inp === "4" ? "36" : ""

 let priceWithDicount = inp === "0" ? "6":
 inp === "1" ? "9":
 inp === "2" ? "12":
 inp === "3" ? "18":
 inp === "4" ? "27" : ""
  
  return (
    <main>

      <div className="priceBox">
        <p className="pageviews"><span>{pageviews}</span> PAGEVIEWS</p>
        <p className="perMonth"><strong className="price">${toggleBox ? priceWithDicount : price}</strong> / month</p>
      </div>

      <div className="rangeBox">
        <input 
          type="range" 
          min="0" 
          max="4" 
          className="range" 
          value={inp} 
          onChange={(e) => {
            setInp(e.target.value)
            //console.log(inp)
            console.log(pageviews)
          }
          }
          style={{background: `linear-gradient(90deg, hsl(174, 77%, 80%) ${inp*25}%, hsl(224, 65%, 95%) ${(inp)*25}%)`}}
        />

        <div className="optionsBox">
  
          <p>Monthly Billing</p>
          
          <input type="checkbox" id="toggleB" onChange={(e) => {
            console.log(toggleBox)
            setToggleBox(e.target.checked)}
            }/>
          <label htmlFor='toggleB' className="toggleBox">
          </label>
          
          <span>Yearly Billing</span>
          <span className='discount'>25% discount</span>
  
        </div>

      </div>

      <hr />

      <div className='bottomSection'>

        <div className='checkMarksBox'>
          <p>Unlimited websites</p>
          <p>100% data ownership</p>
          <p>Email reports</p>
        </div>

        <div>
          <button className="theButton">Start my trial</button>
        </div>
        
      </div>


    </main>
  )
}

export default Main