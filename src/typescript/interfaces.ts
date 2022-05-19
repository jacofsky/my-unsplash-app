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

export interface UserRegister {
    name: string,
    email:string, 
    password:string
}

export interface UserLogIn {
    email:string, 
    password:string
}

export interface UserLogged {
    name:string, 
    password:string,
    token: string,
    userId: string
}