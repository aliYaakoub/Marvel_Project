import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import EventCard from '../EventCard';
import LoadingLogo from '../common/loadingLogo';

const CharacterEventsGrid = (props) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const hash = '95e95c40e973659f8d7dceea370df138';
    const charID = props.item.id;

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`https://gateway.marvel.com:443/v1/public/characters/${charID}/events?&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}&limit=2`)
            setItems(result.data.data.results);
            console.log(result.data.data.results);
            setIsLoading(false);
        }
        fetch();
    },[charID])

    return (
        <div>
            {isLoading ? <LoadingLogo/>:
                <div>
                    {items.length===0 ? 
                    <div className=''>
                    </div> 
                    : 
                    <div className='w-full text-center text-3xl mt-5 text-white'>
                        <h1 className='mt-12  ' >number of events displayed : {items.length}</h1>
                        <div className='grid grid-cols-1 mt-5 gap-10 md:grid-cols-2 xlg:grid-cols-3 p-5'>
                            {items.map(item => (
                                <EventCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>}
                </div>
            }
        </div>
    )
}

export default CharacterEventsGrid;
