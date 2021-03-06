import React, {useState, useEffect} from 'react'

const CharacterOverview = ({item}) => {

    const [imgExt, setImgExt] = useState('');

    useEffect(()=>{
        if(window.innerWidth < 450){
            setImgExt('/portrait_incredible.jpg');
        }
        else{
            setImgExt('/standard_incredible.jpg');
        }
    },[])

    return (
    <div>
        <div className='grid grid-cols-2 w-full p-5 md:px-12 md:pt-12'>
            <img className='w-full md:w-3/4 justify-self-center rounded-xl' src={item.thumbnail.path + imgExt} alt="" />
            <div className='pl-5 flex-col flex  justify-center'>
                <h2 className='my-2 sm:text-2xl lg:text-3xl lg:my-5'> <strong>Name : </strong> {item.name} </h2>
                <h2 className='my-2 sm:text-2xl lg:text-3xl lg:my-5'><strong>Comics : </strong> {item.comics.available} </h2>
                <h2 className='my-2 sm:text-2xl lg:text-3xl lg:my-5'><strong>Events : </strong> {item.events.available} </h2>
                <h2 className='my-2 sm:text-2xl lg:text-3xl lg:my-5'><strong>Series : </strong> {item.series.available} </h2>
                <h2 className='my-2 sm:text-2xl lg:text-3xl lg:my-5'><strong>Stories : </strong> {item.stories.available} </h2>
            </div>
        </div>
        <div className='md:mx-10 lg:mx-20'>
            {item.description.length === 0 ?
                <h2 className='my-2 sm:text-2xl lg:text-3xl lg:my-5 w-full p-5 md:p-12 text-justify'>sorry no description available</h2> :
                <h2 className='my-2 sm:text-2xl lg:text-3xl lg:my-5 w-full p-5 md:p-12 text-justify'> <strong className='leading-normal'>Description : </strong> <p className='sm:leading-10'>{item.description}</p> </h2>
            }
        </div>
    </div>
    )
}

export default CharacterOverview
