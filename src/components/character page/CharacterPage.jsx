import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterOverview from './CharacterOverview';
import ComicsGrid from '../ComicGrid';

const CharacterPage = (props) => {

    const [item, setItem] = useState([]);

    const hash = '95e95c40e973659f8d7dceea370df138';
    const charID = props.match.params.id;

    useEffect(()=>{
        let fetch = async () =>{
            const result = await axios(`https://gateway.marvel.com:443/v1/public/characters/${charID}?&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}`)
            setItem(result.data.data.results);
            console.log(result.data.data.results[0]);
        }
        fetch();
    },[charID])

    // console.log(item.events.items[0].resourceURI);
    
    return (
        <div className='flex flex-col text-white'>
            <h1 className='w-2/4 mt-5 mx-auto text-center py-5 text-2xl sm:text-4xl bg-gradient-to-r from-transparent via-black to-transparent'> Character Overview </h1>
            {item.map(item =>(
                <CharacterOverview key={item.id} item={item}  />
            ))}

            <h1 className='w-2/4 mt-5 mx-auto text-center py-5 text-2xl sm:text-4xl bg-gradient-to-r from-transparent via-black to-transparent'> Character Comics </h1>
            {item.map(item => (
                <ComicsGrid key={item.id} item={item} />
            ))}
        </div>
    )
}

export default CharacterPage
