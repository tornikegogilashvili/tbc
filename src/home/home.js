

import React from 'react'
import mainimg from '../img/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.webp'
import './home.css'


export const Home = () => {
    return(
        <div>

            <img src={mainimg} alt='mainimg' className='mainimg' 
            
            />
            <h2 className='tbceduc'>TBC x USAID <br></br>
ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲣᲠᲘ ᲒᲐᲜᲐᲗᲚᲔᲑᲘᲡᲗᲕᲘᲡ</h2>
            <div>
                <p className='textt'>
„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.</p>
            </div>
        </div>
    )
 }
