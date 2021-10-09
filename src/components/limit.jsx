import React, {useState} from 'react'

const Limit = (props) => {

    const [limit, setLimit] = useState(20);

    return (
        <div className='mx-auto w-3/5 mb-5 flex flex-row'>
        <div className='mx-auto w-full sm:w-3/5 mb-5 flex flex-row items-end'>
            {/* <form className='mx-auto w-full sm:w-3/5 mb-5 flex flex-row items-end'> */}
                <div className='w-full'>
                    <p className='ml-5 w-full'>max is 100</p>
                    <input
                        className='w-full h-14 rounded-2xl text-black px-3 outline-none text-xl shadow-xl'
                        type="number"
                        name='limit'
                        value={limit}
                        max='100'
                        min='1'
                        onChange={(e)=>setLimit(e.target.value)}
                    />
                </div>
                <button 
                    className="transition-transform bg-red-700 w-48 h-14 rounded-2xl px-3 py-1 mx-3 transform active:bg-red-500 hover:scale-105"
                    onClick={()=>props.submit(limit)}
                >
                    set limit
                </button>
            {/* </form> */}
            </div>
        </div>
    )
}

export default Limit
