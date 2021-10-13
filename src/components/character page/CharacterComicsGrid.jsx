import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComicsCard from '../ComicsCard';
// import { Link } from 'react-router-dom';
import LoadingLogo from '../common/loadingLogo';

const CharacterComicsGrid = (props) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const hash = '95e95c40e973659f8d7dceea370df138';
    const charID = props.item.id;

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`http://gateway.marvel.com/v1/public/characters/${charID}/comics?&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}&limit=3`);
            setItems(result.data.data.results);
            console.log(result.data.data.results);
            setIsLoading(false);
        }
        fetch();
    },[charID]);


    return (
        <div>
            {isLoading ? <LoadingLogo/>:
                <div>
                    {items.length===0 ? 
                    <div></div>
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

export default CharacterComicsGrid;