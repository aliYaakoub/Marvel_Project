import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';

const EventsGrid = (props) => {

    const [items, setItems] = useState([]);

    const hash = '95e95c40e973659f8d7dceea370df138';
    const charID = props.match.params.id;

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`https://gateway.marvel.com:443/v1/public/characters/${charID}/events?&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}&limit=100`)
            setItems(result.data.data.results);
            console.log(result.data.data.results);
        }
        fetch();
    },[charID])

    return (
            <div>
                <div><Link to={`/character/${charID}`} className='text-2xl text-white fixed top-0 left-0 bg-black px-4 py-2'>&#10094; go back</Link></div>
                {items.length === 0 ?
                    <div className='flex items-center text-center justify-center w-full text-white h-screen sm:text-2xl'>
                        <h2 className='w-full'>sorry there is no events available for this character</h2>
                    </div>:
                    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xlg:grid-cols-3 p-5'>
                        {items.map(item => (
                            <EventCard key={item.id} item={item} />
                        ))}
                    </div>
                }
            </div>
    )
}

export default EventsGrid
