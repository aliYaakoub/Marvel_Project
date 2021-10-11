import React from 'react'

const SeriesCard = ({item}) => {

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
                <h2 className="pb-3"><strong>Events : </strong>{item.events.available}</h2>
                <h2 className="pb-3"><strong>Stories : </strong>{item.stories.available}</h2>
                <h2 className="pb-3"><strong>Start Year : </strong>{item.startYear}</h2>
                <h2 className="pb-3"><strong>End Year : </strong>{item.endYear}</h2>
                {item.type.length === 0 ? 
                    <h1 className='pb-3'>type not specified</h1>:
                    <h2 className="pb-3"><strong>type : </strong>{item.type}</h2>
                }
                {/* {!item.description ? 
                    <h2 className='pb-3'>no description available</h2>:
                    <h2 className='pb-3'><strong>Description : </strong><p>{item.description}</p></h2>
                } */}
            </div>
        </div>
    )
}

export default SeriesCard
