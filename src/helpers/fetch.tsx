import axios from 'axios'
import { ImagePaginated } from '../typescript/interfaces'


const imagePath:string = process.env.REACT_APP_API_IMAGE_PATH as string
const userPath:string = process.env.REACT_APP_API_USER_PATH as string


export const fetchImages = async(limit:number, skip:number) => {

    const data: any = await axios.get(`${imagePath}/`, {params: {limit, skip}})
    const images:ImagePaginated = data.data
    
    return images

}

export const fetchUserImages = async(limit:number, skip:number, token:string) => {

    const data: any = await axios.get(`${imagePath}/userImages`, {headers: {"x-token": token}, params: {limit, skip}})
    const images:ImagePaginated = data.data
    
    return images

}

export const fetchimagesByLabel = async(limit:number, skip:number, label:string) => {

    const data: any = await axios.get(`${imagePath}/${label}`, {params: {limit, skip}})
    const images: ImagePaginated = data.data
    
    return images

}

export const fetchUploadImage = async(link:string, label:string, token:string) => {

    await axios.post(`${imagePath}/`, {link, label}, {headers: {"x-token": token}})

}

export const fetchDeleteImage = async(imageId:string, token:string) => {

    await axios.post(`${imagePath}/${imageId}`, {headers: {"x-token": token}})

}