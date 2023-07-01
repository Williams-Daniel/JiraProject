export interface Iprops{
    Name?:boolean,
    Email?:boolean,
    Password?:boolean,
    ConfirmPassword?:boolean,

    name?:string,
    email?:string,
    password?:string,
    confirmPassword?:string,

    namePlace?:string,
    emailPlace?:string,
    passwordPlace?:string,
    confirmPasswordPlace?:string,
}

export interface ISocials{
    icon:any,
    text:string,
    color?:string
}

export interface  IButtons{
    text?:string,
    bg?:string,
    color?:string
}