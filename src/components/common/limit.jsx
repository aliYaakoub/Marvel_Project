import React, {useState} from 'react'

const Limit = (props) => {

    const [limit, setLimit] = useState(20);

    function submitValue () {
        if(limit < 1){
            alert("limit can't be less than 1" )
        }
        else if (limit > 100){
            alert("limit can't be more than 100" )
        }
        else{
            props.submit(limit);
        }
    } 

    return (
        <div className='mx-auto w-4/5 sm:w-3/5 mb-5 flex flex-row'>
        <div className='mx-auto w-full sm:w-3/5 mb-5 flex flex-row items-end'>
            {/* <form className='mx-auto w-full sm:w-3/5 mb-5 flex flex-row items-end'> */}
                <div className='w-full'>
                    <p className='ml-5 w-full'>max is 100 per call</p>
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
                    className="transition-transform bg-red-600 w-48 h-14 rounded-2xl shadow-lg px-3 py-1 mx-3 transform active:bg-red-500 hover:scale-105"
                    onClick={()=>submitValue()}
                >
                    set limit
                </button>
            {/* </form> */}
            </div>
        </div>
    )
}

export default Limit
