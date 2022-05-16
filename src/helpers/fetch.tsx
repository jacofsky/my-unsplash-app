import axios from 'axios'
import { Image } from '../typescript/interfaces'


export const fetchImages = async() => {

    const data: any = await axios.get("https://mysplashapi.herokuapp.com/image")
    const images: Image[] = data.data.images
    
    return images

}