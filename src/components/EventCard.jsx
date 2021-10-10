import React, { useState, useEffect } from 'react'

const EventCard = ({item}) => {

    // const [imgFormat, setImgFormat] = useState('')

    // useEffect(()=>{
    //     if(window.innerWidth < 751){
    //         setImgFormat('/standard_incredible.jpg')
    //     }
    //     else{
    //         setImgFormat('/portrait_uncanny.jpg')
    //     }
    // },[])

    return (
        <div className='border border-white w-full flex flex-col text-2xl text-white'>
            <img src={item.thumbnail.path + '/standard_incredible.jpg'} alt="" className='h-full' />
            <div className='w-full p-5'>
                <h2 className='pb-3'><strong>Title : </strong>{item.title}</h2>
                <h2 className="pb-3"><strong>Comics : </strong>{item.comics.available}</h2>
                <h2 className="pb-3"><strong>Series : </strong>{item.series.available}</h2>
                <h2 className="pb-3"><strong>Stories : </strong>{item.stories.available}</h2>
                <h2 className="pb-3"><strong>Start Date : </strong>{item.start.slice(0,10)}</h2>
                <h2 className="pb-3"><strong>End Date : </strong>{item.end.slice(0,10)}</h2>
                {item.description.length === 0 ? 
                    <h2 className='pb-3'>no description available</h2>:
                    <h2 className='pb-3'><strong>Description : </strong><p>{item.description}</p></h2>
                }
            </div>
        </div>
    )
}

export default EventCard
