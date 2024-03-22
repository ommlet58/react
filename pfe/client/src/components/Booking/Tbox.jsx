import React from 'react'
import '../Booking/tbox.css'


function Tbox({values,dates , onClick , handleOpenDate}) {
    var durationInDays = 0;
  
        if(dates[0]){const durationInMilliseconds = Math.abs(dates[1].getTime() - dates[0].getTime());
       durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
        }
  
console.log(dates);
    
    return (
    
    <div className='tbox'>
        {values ?
            <>
        <ul>
            
            <li><span>Guest</span><span>{values}</span></li>
            {dates[0]?<><li><span>Checkin</span><span>{dates[0]? dates[0].toDateString():""}</span></li>
            <li><span>Checkout</span><span>{dates[0]? dates[0].toDateString():""}</span></li>
            <li><span>Duration</span><span>{dates[0]? durationInDays:""}</span></li></>
            :<button onClick={handleOpenDate}>Chose Dates</button>}
            <li><span>Upgrades</span><span>0</span></li>
            <li><span>Total</span><span>0€</span></li> 
        </ul>
        </>:<button onClick={onClick} >Select Guest</button>
        }
    </div>
  )
}

export default Tbox
