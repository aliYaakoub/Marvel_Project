import React from 'react'

const Search = (props) => {
    return (
        <div className='mx-auto w-3/5 mb-5 flex flex-col'>
            <input 
                type='text' 
                value={props.value} 
                onChange={props.onChange} 
                className='w-full h-14 rounded-2xl text-black px-3 outline-none text-xl shadow-xl'
                placeholder='Type What You Desire'
            />
        </div>
    )
}

export default Search
