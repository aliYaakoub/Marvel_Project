import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { paginate } from '../utils/paginate';
import Pagination from './common/pagination';
import Limit from './common/limit';
import LoadingLogo from './common/loadingLogo';
import StoriesCard from './StoriesCard';

const StoriesGrid = (props) => {

    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState(20);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const hash = '95e95c40e973659f8d7dceea370df138';
    const charID = props.match.params.id;

    const paginatedItems = paginate(items, currentPage, pageSize);

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`https://gateway.marvel.com:443/v1/public/characters/${charID}/stories?&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}&limit=${limit}`)
            setItems(result.data.data.results);
            setIsLoading(false);
            console.log(result.data.data.results);
            setCurrentPage(1);
        }
        fetch();
    },[charID,limit])

    function handleLimitChange(value){
        setLimit(value);
        if(value > 40){
            setPageSize(6);
        }
        else{
            setPageSize(3)
        }
    }

    return (
        <div className='text-white mt-20'>
            <div><Link to={`/character/${charID}`} className='text-2xl text-white fixed top-0 left-0 bg-black px-4 py-2'>&#10094; go back</Link></div>
            
            <Limit value={limit} submit={(value)=>handleLimitChange(value)} />
            {isLoading ? <LoadingLogo /> : 
                items.length === 0 ?
                    <div className='flex items-center text-center justify-center w-full text-white h-screen sm:text-2xl'>
                        <h2 className='w-full'>sorry there is no stories available for this character</h2>
                    </div>:
                    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 p-5'>
                    {paginatedItems.map(item => (
                        <StoriesCard key={item.id} item={item} />
                        ))}
                    </div>
            }
            <Pagination
                itemsCount={items.length}
                currPage={currentPage}
                pageSize={pageSize}
                onPageChange={(page)=>setCurrentPage(page)}
            />
        </div>
    )
}

export default StoriesGrid;
