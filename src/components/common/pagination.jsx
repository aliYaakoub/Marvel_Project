import React from 'react';
import lodash from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const {itemsCount , pageSize, onPageChange, currPage} = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount===1) {
        return null
    }
    
    const pages = lodash.range(1,pagesCount + 1);

    return (     
        <nav>
            <ul className='w-full flex flex-row items-center justify-center pb-12'>
                {pages.map(page=>(
                    <li className={page===currPage?'px-3 py-1 cursor-pointer hover:bg-red-700 rounded-full mx-5 page-item bg-red-700':'px-3 py-1 cursor-pointer hover:bg-red-700 rounded-full mx-5 page-item'} onClick={()=>onPageChange(page)} key={page}>{page}</li>
                ))}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currPage: PropTypes.number.isRequired
}

export default Pagination;