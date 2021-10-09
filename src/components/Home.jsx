import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterGrid from './CharacterGrid';
import Header from './Header';
import Limit from './limit';
import Search from './Search';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [limit, setLimit] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const hash = '95e95c40e973659f8d7dceea370df138';

    const paginatedItems = paginate(items, currentPage, pageSize);

    useEffect(()=>{
        const fetch = async () => {
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?${ searchText ? `nameStartsWith=${searchText}` : '' }&ts=1&apikey=51479b334179b691e910fc943463fd55&hash=${hash}&limit=${limit}`)
            setItems(result.data.data.results);
            console.log(result.data.data.results);
            setIsLoading(false);
            setCurrentPage(1);
        }
        fetch();
    },[searchText,limit]);

    function handleLimitChange(value){
        setLimit(value);
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
    }

    return (
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
        </div>
    );
}

export default Home
