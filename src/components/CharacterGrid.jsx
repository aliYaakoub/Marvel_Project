import React from 'react';
import CharacterCard from './characterCard';

const CharacterGrid = ({ items, isLoading }) => {
    return (
        // <div className='cards'>
        //     {isLoading ? <h1 className='w-full text-center text-4xl'>loading...</h1> :
        //     {items.map(item => (
        //         <CharacterCard key={item.id} item={item} />
        //     ))}
        //     }  
        // </div>
        <div>
            {isLoading ? <h1 className='w-full text-center text-4xl'>loading</h1> :
                <div className='cards'>
                        {items.map(item=>(
                            <CharacterCard key={item.id} item={item} />
                        ))}
                </div>
            }
        </div>
    )
}

export default CharacterGrid;