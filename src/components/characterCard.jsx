import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ item }) => {
    return (
        <div className='card'>
            <Link to={`/character/${item.id}`} >
                <div className="card-inner rounded-xl">
                    <div className="card-front">
                        <img src={item.thumbnail.path + '/standard_incredible.jpg'} alt="" className="w-full rounded-xl" />
                    </div>
                    <div className="card-back rounded-xl">
                        <p>name : {item.name}</p>
                        {item.description ? <p>description : {item.description}</p> : <p className='w-full text-center my-4'>No Description</p> }
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CharacterCard
