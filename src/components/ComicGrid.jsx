import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComicsCard from './ComicsCard';
import { Link } from 'react-router-dom';

const ComicGrid = (props) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const hash = '95e95c40e973659f8d7dceea370df138';
    const charID = props.item.id;

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`http://gateway.marvel.com/v1/public/characters/${charID}/comics?&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}`);
            setItems(result.data.data.results);
            console.log(result.data.data.results);
            setIsLoading(false);
        }
        fetch();
    },[charID])


    return (
        <div>
            <div><Link to='/' className='text-2xl text-white fixed top-0 left-0 bg-black px-4 py-2'>&#10094; go back</Link></div>
            {isLoading ? <h1 className='w-full text-center text-white mt-10'> loading... </h1>:
                <div>
                    {items.length===0 ? 
                    <div className='flex items-center justify-center h-screen'>
                        <h1 className='text-4xl text-white'>sorry no comics available for this character</h1>
                    </div> 
                    : 
                    <div className='w-full text-center text-3xl mt-5 text-white'>
                        <h1 className='mt-12 text-2xl ' >number of comics displayed : {items.length}</h1>
                        <div className='px-10 my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                            {items.map(item => (
                                <ComicsCard key={item.id} item={item} />
                                ))}
                        </div>
                    </div>}
                </div>
            }
        </div>
    );
}

export default ComicGrid;