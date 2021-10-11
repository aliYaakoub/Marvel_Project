import React from 'react';
import CharacterCard from './characterCard';
import LoadingLogo from '../components/common/loadingLogo';

const CharacterGrid = ({ items, isLoading }) => {
    return (
        <div>
            {isLoading ? <LoadingLogo/> :
                <div>
                    <h1 className='mb-5 w-full text-center md:hidden'>press and hold on the card to flip it</h1>
                    <div className='cards'>
                            {items.map(item=>(
                                <CharacterCard key={item.id} item={item} />
                            ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default CharacterGrid;