import React from "react";
import './list-style.css';
import { Card } from '../card/card.component'



export const Cardlist = (props) => {
    return (
        <div className='cardlist'>
            {props.friend.map(friend =>
                (<Card key={friend.id} friend={friend} />
                ))}

        </div>
    )
};