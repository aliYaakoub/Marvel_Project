import React from 'react'

const Offset = (props) => {
    return (
        <div className='flex flex-row w-full items-center justify-center mb-12'> 
            <a href="#top"><button onClick={props.handlePrev} disabled={props.currentPage === 0 ? true : false} className={props.max <= props.limit ? 'm-5 text-xl sm:text-2xl bg-black bg-opacity-50 p-4 rounded-xl hidden' :'m-5 text-xl sm:text-2xl bg-black bg-opacity-50 p-4 rounded-xl'}>&lsaquo;&lsaquo; Previous {props.limit}</button></a>
            <a href="#top"><button onClick={props.handleNext} disabled={props.currentPage === props.pagesCount ? true : false} className={props.max <= props.limit ? 'm-5 text-xl sm:text-2xl bg-black bg-opacity-50 p-4 rounded-xl hidden' :'m-5 text-xl sm:text-2xl bg-black bg-opacity-50 p-4 rounded-xl'}>Next {props.limit} &rsaquo;&rsaquo;</button></a>
        </div>
    )
}

export default Offset;