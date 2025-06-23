export interface LoginRequest{
    email:string,
    password:string
}

export interface AuthResponse{
    user_id:number
}

export interface UserRequest{
    names:string
    lastnames:string
    gender:string
    birthdate:string
    address:string
    district:string
    province:string
    department:string
    email: string
    password: string
}