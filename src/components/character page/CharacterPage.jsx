import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterOverview from './CharacterOverview';
import ComicGrid from './CharacterComicsGrid' ;
import CharacterEventsGrid from './CharacterEventsGrid';
import CharacterSeriesGrid from './CharacterSeriesGrid';
import { Link } from 'react-router-dom';
import LoadingLogo from '../common/loadingLogo';
import CharacterStoriesGrid from './CharacterStoriesGrid';

const CharacterPage = (props) => {

    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false);
        },1500)
    }, [])

    // console.log(item.events.items[0].resourceURI);
    
    return (
        <div>
            {isLoading ? <div className='flex h-screen items-center justify-center'><LoadingLogo/></div>:
            <div className='flex flex-col text-white'>
                <div><Link to='/' className='z-10 text-2xl text-white fixed top-0 left-0 bg-black px-4 py-2'>&#10094; go back</Link></div>
                <h1 className='w-2/4 mt-5 mx-auto text-center py-5 text-2xl sm:text-4xl bg-gradient-to-r from-transparent via-black to-transparent'> Character Overview </h1>
                {item.map(item =>(
                    <CharacterOverview key={item.id} item={item}  />
                ))}
                {/* comics area */}
                <h1 className='w-2/4 mt-5 mx-auto text-center py-5 text-2xl sm:text-4xl bg-gradient-to-r from-transparent via-black to-transparent'> Character Comics </h1>
                {item.map(item => (
                    <ComicGrid key={item.id} item={item} />
                    ))}
                
                <div className='w-full text-center mb-20'>
                    <p className='w-2/4 text-xl sm:text-2xl text-center mx-auto transform sm:hover:scale-110 transition-transform'>
                        <Link className='' to={`/characterComics/${charID}`} > See all comics for this Character here &#8594;</Link>
                    </p>
                </div>
                {/* events area */}
                <h1 className='w-2/4 mt-5 mx-auto text-center py-5 text-2xl sm:text-4xl bg-gradient-to-r from-transparent via-black to-transparent'> Character Events </h1>
                {item.map(item =>(
                    <CharacterEventsGrid key={item.id} item={item}  />
                ))}
                <div className='w-full text-center mt-5 mb-20'>
                    <p className='w-2/4 text-xl sm:text-2xl text-center mx-auto transform sm:hover:scale-110 transition-transform'>
                        <Link className='' to={`/characterEvents/${charID}`} > See all events for this Character here &#8594;</Link>
                    </p>
                </div>
                {/* series area */}
                <h1 className='w-2/4 mt-5 mx-auto text-center py-5 text-2xl sm:text-4xl bg-gradient-to-r from-transparent via-black to-transparent'> Character Series </h1>
                {item.map(item =>(
                    <CharacterSeriesGrid key={item.id} item={item}  />
                ))}
                <div className='w-full text-center mt-5 mb-20'>
                    <p className='w-2/4 text-xl sm:text-2xl text-center mx-auto transform sm:hover:scale-110 transition-transform'>
                        <Link className='' to={`/characterSeries/${charID}`} > See all series for this Character here &#8594;</Link>
                    </p>
                </div>

                {/* stories area */}
                <h1 className='w-2/4 mt-5 mx-auto text-center py-5 text-2xl sm:text-4xl bg-gradient-to-r from-transparent via-black to-transparent'> Character stories </h1>
                {item.map(item =>(
                    <CharacterStoriesGrid key={item.id} item={item}  />
                ))}
                <div className='w-full text-center mt-5 mb-20'>
                    <p className='w-2/4 text-xl sm:text-2xl text-center mx-auto transform sm:hover:scale-110 transition-transform'>
                        <Link className='' to={`/characterStories/${charID}`} > See all stories for this Character here &#8594;</Link>
                    </p>
                </div>
            </div>
            }
        </div>
    )
}

export default CharacterPage
