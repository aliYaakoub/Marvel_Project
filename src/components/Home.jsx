import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterGrid from './CharacterGrid';
import Header from './Header';
import Limit from './common/limit';
import Search from './common/Search';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import Offset from './common/offset';
import LoadingLogo from './common/loadingLogo';

const Home = () => {
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);
    const [max, setMax] = useState(0)
    // const [currentPage, setCurrentPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const hash = '95e95c40e973659f8d7dceea370df138';

    const paginatedItems = paginate(items, currentPage, pageSize);

    useEffect(()=>{
        const fetch = async () => {
            const result = await axios(`https://gateway.marvel.com/v1/public/characters?${ searchText ? `nameStartsWith=${searchText}` : '' }&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}&limit=${limit}&offset=${offset}`)
            setItems(result.data.data.results);
            setData(result.data);
            console.log(result.data);
            setMax(result.data.data.total);
            setIsLoading(false);
            setCurrentPage(1);
        }
        fetch();
    },[searchText,limit,offset]);

    useEffect(()=>{
        setOffset(0);
    },[searchText])

    function handleLimitChange(value){
        setLimit(value);
        setOffset(0);
        if(value > 80){
            setPageSize(15);
        }
        else if(value > 60){
            setPageSize(12);
        }
        else if(value > 40){
            setPageSize(9);
        }
        else{
            setPageSize(6)
        }
        setTimeout(()=>{
            alert(`limit set to ${value}`);
        },500);
    }
    
    function handleNext(){
        setOffset(offset + Number(limit));
    }
    function handlePrev(){
        setOffset(offset - Number(limit));
    }

    let code = '</>';

    return (
        <div>
            {isLoading ? 
                <div className='flex items-center justify-center h-screen'>
                    <LoadingLogo /> 
                </div>
                : 
                !data.code ===200 ?
                <div>
                    <h1>sorry we have reached max call per day</h1>
                </div>:
                <div className="App h-screen text-white">
                    <div className='flex flex-col w-full'>
                        <Header />
                        <Search
                            value={searchText}
                            onChange={(e)=>setSearchText(e.target.value)}
                        />
                        <Limit value={limit} submit={(value)=>handleLimitChange(value)} />
                    </div>
                    <CharacterGrid items={paginatedItems} isLoading={isLoading} />
                    <Pagination
                        itemsCount={items.length}
                        currPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={(page)=>setCurrentPage(page)}
                    />
                    <Offset 
                        limit={limit} 
                        currentPage={offset} 
                        pagesCount={max/limit} 
                        handleNext={()=>handleNext()} 
                        handlePrev={()=>handlePrev()}  
                    />
                    <p className='w-full text-center pb-10'>{data.attributionText}</p>
                    <p className='w-full text-center pb-10'>{code} By Ali Yaakoub</p>
                </div>
            }
        </div>
    );
}

export default Home
