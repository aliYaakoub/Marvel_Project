import React from 'react'

const StoriesCard = ({item}) => {

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
        <div className='card w-full flex flex-col text-2xl text-white'>
            <div className='card-inner w-full '>
                <div className="card-front p-5 border border-white overflow-hidden rounded-xl">
                    <h2 className='pb-3'><strong>Title : </strong>{item.title}</h2>
                    <h2 className='pb-3'><strong>Characters : </strong>{item.characters.available}</h2>
                    <h2 className="pb-3"><strong>Comics : </strong>{item.comics.available}</h2>
                    <h2 className="pb-3"><strong>Events : </strong>{item.events.available}</h2>
                    <h2 className="pb-3"><strong>Series : </strong>{item.series.available}</h2>
                    <h2 className="pb-3"><strong>Start Year : </strong>{item.startYear}</h2>
                    <h2 className="pb-3"><strong>End Year : </strong>{item.endYear}</h2>
                    {item.type.length === 0 ?
                        <h1 className='pb-3'>type not specified</h1>:
                        <h2 className="pb-3"><strong>type : </strong>{item.type}</h2>
                    }
                </div>
                <div className="card-back rounded-xl">
                    {!item.description ?
                        <h2 className='pb-3'>no description available</h2>:
                        <h2 className='pb-3'><strong>Description : </strong><p>{item.description}</p></h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default StoriesCard;
