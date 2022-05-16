import React, { useEffect, useState } from 'react'
import { fetchImages } from '../helpers/fetch';
import { Image as Imagets } from '../typescript/interfaces'
import Image from './Image'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
    default: 3,
    991: 2,
    500: 1
};

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
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
            
            {images.map(image => <Image key={image._id} data={image} />)}

        </Masonry>
    )
}

export default ImageContainer