export const isLoggedIn = () => {
    return localStorage.getItem('') || false
}

export const setUserData = (data) => {
    return localStorage.setItem('', data)
}

export const clearUserData = () => {
    return localStorage.clear()
}
