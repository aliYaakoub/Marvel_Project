import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComicsCard from './ComicsCard';
import { Link } from 'react-router-dom';
import Limit from './common/limit';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import Offset from './common/offset';
import LoadingLogo from '../components/common/loadingLogo';

const ComicGridFull = (props) => {

    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState(20);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const [offset, setOffset] = useState(0);
    // const [data, setData] = useState([]);
    const [max, setMax] = useState(0);

    const hash = '95e95c40e973659f8d7dceea370df138';
    const charID = props.match.params.id;

    const paginatedItems = paginate(items, currentPage, pageSize);

    useEffect(()=>{
        const fetch = async () =>{
            const result = await axios(`http://gateway.marvel.com/v1/public/characters/${charID}/comics?&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}&limit=${limit}&offset=${offset}`);
            setItems(result.data.data.results);
            console.log(result.data.data.results);
            setMax(result.data.data.total);
            setIsLoading(false);
            setCurrentPage(1);
        }
        fetch();
    },[charID,limit,offset])

    function handleLimitChange(value){
        setLimit(value);
        if(value > 80){
            setPageSize(15);
        }
        if(value > 60){
            setPageSize(12);
        }
        else if(value > 40){
            setPageSize(9);
        }
        else{
            setPageSize(6)
        }
    }
    
    function handleNext(){
        setOffset(offset + Number(limit));
    }
    function handlePrev(){
        setOffset(offset - Number(limit));
    }

    return (
        <div className='text-white mt-20'>
            <div><Link to={`/character/${charID}`} className='z-10 rounded-br-lg text-2xl text-white fixed top-0 left-0 bg-black px-4 py-2'>&#10094; go back</Link></div>

            <Limit value={limit} submit={(value)=>handleLimitChange(value)} />
            {isLoading ? <LoadingLogo/>:
                <div>
                    {items.length===0 ? 
                    <div className='flex items-center justify-center h-screen'>
                        <h1 className='text-4xl text-white'>sorry no comics available for this character</h1>
                    </div> 
                    : 
                    <div className='w-full text-center text-3xl mt-5 text-white'>
                        <h1 className='mt-12 text-2xl ' >number of comics displayed : {items.length}</h1>
                        <div className='px-10 my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                            {paginatedItems.map(item => (
                                <ComicsCard key={item.id} item={item} />
                                ))}
                        </div>
                    </div>}
                </div>
            }
            <Pagination
                itemsCount={items.length}
                currPage={currentPage}
                pageSize={pageSize}
                onPageChange={(page)=>setCurrentPage(page)}
            />
            <Offset 
                limit={limit} 
                currentPage={offset} 
                pagesCount={max} 
                max={max}
                handleNext={()=>handleNext()} 
                handlePrev={()=>handlePrev()}  
            />
        </div>
    );
}

export default ComicGridFull;