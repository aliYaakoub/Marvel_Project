import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ item }) => {
    return (
        <div className='card'>
            <Link to={`/character/${item.id}`} >
                <div className="card-inner rounded-xl">
                    <div className="card-front bg-black">
                        <img src={item.thumbnail.path + '/standard_incredible.jpg'} alt="" className="w-full rounded-xl" />
                    </div>
                    <div className="card-back relative rounded-xl overflow-hidden">
                        <p><strong>name : </strong> <span className='block'>{item.name}</span></p>
                        {item.description ? <p><strong>description : </strong><span className='block'>{item.description}</span></p> : <p className=' my-4'>No Description</p> }
                        <p className='absolute bg-gray-600 w-full left-0 bottom-0 text-center py-3 text-xl'>Click On The Card For More Info</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CharacterCard
