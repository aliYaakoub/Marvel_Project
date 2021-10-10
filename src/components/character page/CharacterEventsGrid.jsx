import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard';

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
        // <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xlg:grid-cols-3 p-5'>
        //     <h1>Number of events displayed : {item.}</h1>
        //     {items.map(item => (
        //         <EventCard key={item.id} item={item} />
        //     ))}
        // </div>
        <div>
            <div><Link to='/' className='text-2xl text-white fixed top-0 left-0 bg-black px-4 py-2'>&#10094; go back</Link></div>
            {isLoading ? <h1 className='w-full text-center text-white mt-10'> loading... </h1>:
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
