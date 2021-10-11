import React from 'react'
import loading from '../../imgs/loadingGIF.gif';

const loadingLogo = () => {
    return (
        <div className='flex items-center justify-center'>
            <img src={loading} alt="" />
        </div>
    )
}

export default loadingLogo