import React from 'react'
import { useSelector } from 'react-redux';
import { Image as ImageTS } from '../typescript/interfaces'

import DeleteButton from './DeleteButton';



interface IProps {
    data: ImageTS
}

const Image = ({data}:IProps) => {
    
    const {userId} = useSelector((state:any) => state.auth)


    return (
        <div className='imageCard d-flex my-3 justify-content-center' >

            <img className="imageHorizontal" src={data.link} alt={data.label} />

            <p>{data.label}</p>

            {(userId === data.user) && <DeleteButton imageId={data._id}/>}
            
            

        </div>
    )
}

export default Image