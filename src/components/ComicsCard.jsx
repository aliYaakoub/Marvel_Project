import React from 'react'

const ComicsCard = ({item}) => {
    return (
        <div className='border border-white w-full inline-block bg-black text-2xl text-white'>
            <img src={item.thumbnail.path + '.jpg'} alt="" className='w-full mb-5' />
            <div className='text-center'>
                <h1 className=' mb-5 px-5'>{item.title}</h1>
                {!item.events.items.length ? <p className=' mb-5 px-5'>no events in this comic</p> :
                    <div className="flex flex-row justify-center">
                        <p className=' mb-5 px-5'>events : </p>
                        <ul>
                            {item.events.items.map((event, index) => (
                                <li key={index}>{event.name}</li>
                            ))}
                        </ul>
                    </div>
                }
                <p className=' mb-5 px-5'>date : {item.dates[0].date.slice(0,10).toString()} </p>
            </div>
        </div>
    )
}

export default ComicsCard
