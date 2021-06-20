import React, { useState } from 'react'
import Tindercard from "react-tinder-card";
import './TinderCards.css';

function Tindercards() {
    const[people,setPeople] = useState([
        {
            name: "jeff bezos",
            url:
            "https://i.pinimg.com/originals/0e/4b/17/0e4b1709becc463dc0c20219205f1386.jpg" ,
        },   
        {
            name: "Jeff Bezos",
            url:
            "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" ,

        },
        {
            name: "Jeff Bezos",
            url:
            "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" ,

        },
        {
            name: "Jeff Bezos",
            url:
            "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" ,

        },
        {
            name: "Jeff Bezos",
            url:
            "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" ,

        },
        {
            name: "Jeff Bezos",
            url:
            "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" ,

        },
    ]);
    const swiped= (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };
    const outOfFrame =(name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
         <div className="tinderCards-container">
            {people.map((person)=>(
             <Tindercard
             className="swipe"
             key={person.name}
             preventSwipe={["up","down"]}
             onSwipe={(dir)=>swiped(dir,person.name)}
             onCardLeftScreen={()=> outOfFrame(person.name)}
             >
                <div style={{ backgroundImage: `url(${person.url})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
             </Tindercard>
            ))}
         </div>
        </div>
            
        
    )
}

export default Tindercards
