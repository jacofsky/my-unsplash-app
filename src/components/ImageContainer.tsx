import React, { useEffect, useState } from 'react'
import { fetchImages } from '../helpers/fetch'
import { Image as Imagets } from '../typescript/interfaces'
import Image from './Image'

const ImageContainer = () => {

    const [images, setImages] = useState<Imagets[]>([])

    useEffect(() => {
        
        fetchData()


    }, [])

    const fetchData = async() => {

        const imgs:Imagets[] = await fetchImages()
        setImages(imgs)

    }

    

    return (
        <div className='mx-5 my-5 row'>
            
            {images.map(image => <Image key={image._id} data={image} />)}

        </div>
    )
}

export default ImageContainer