export interface ImagePaginated {
    count: number,
    images: Image[]
}

export interface Image {
    _id: string,
    link: string,
    label: string,
    state: boolean,
    user: string,
    __v: number
}