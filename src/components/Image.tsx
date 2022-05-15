import React from 'react'
import { Image as ImageTS } from '../typescript/interfaces'

import DeleteButton from './DeleteButton';



interface IProps {
    data: ImageTS
}

const Image = ({data}:IProps) => {
    
    


    return (
        <div className='imageCard d-flex my-3 justify-content-center' >

            <img className="imageHorizontal" src={data.link} alt={data.label} />

            <p>{data.label}</p>

            
            <DeleteButton/>
            

        </div>
    )
}

export default Image