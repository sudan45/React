import React from 'react'

export const Card = props => {
    return (
        <div className='card'>
            <img alt="friendphoto" src={`https://robohash.org/${props.friend.id}?set=set2`}/>
          <h1> {props.friend.first_name}</h1>  
        </div>
    )
};

