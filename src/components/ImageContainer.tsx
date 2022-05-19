import React, { useEffect, useState } from 'react'
import { fetchImages, fetchimagesByLabel } from '../helpers/fetch';
import { Image as Imagets, ImagePaginated } from '../typescript/interfaces'
import Image from './Image'
import Masonry from 'react-masonry-css'
import { useDispatch, useSelector } from 'react-redux';
import { finishLaoding, startLaoding } from '../actions/uiActions';
import { Spinner } from 'react-bootstrap';

const breakpointColumnsObj = {
    default: 3,
    991: 2,
    500: 1
};

const ImageContainer = () => {

    const [images, setImages] = useState<Imagets[]>([])

    const dispatch = useDispatch()
    const {loading, reload, label} = useSelector((state:any) => state.ui)



    useEffect(() => {

        if(label?.length > 1) {
            loadSearchImages(label)
        } else {
            loadImages()
        }

    }, [reload, label])

    const loadImages = async() => {
        
        dispatch(startLaoding())
        const imgs:ImagePaginated = await fetchImages(100, 0)
        setImages(imgs.images)         
        dispatch(finishLaoding())

    }

    const loadSearchImages = async(label:string) => {
        
        dispatch(startLaoding())
        const imgs:ImagePaginated = await fetchimagesByLabel(100, 0, label)
        setImages(imgs.images)         
        dispatch(finishLaoding())

    }


    return (

        <>
            {
                (loading) 
                    ? 
                        <div className='d-flex justify-content-center align-items-center' style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
                            <Spinner   animation='border' variant='success'/> 

                        </div>
                    :
                        (images.length)
                        ? <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="500" columnClassName="my-masonry-grid_column">
                        
                                { 
                                    images.map(image => <Image key={image._id} data={image} />)
                                }
                            
                            </Masonry>
                        : <div className='notFound'><p className='labelnotfound'>Label not found, be the first of post about it!</p></div>
            }
        </>

    )
}

export default ImageContainer