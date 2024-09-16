export const logOut = () => {
    localStorage.removeItem('jwt')
}

export const setUser = (user) =>{
    localStorage.setItem('jwt', JSON.stringfy(user))
}