export const isLoggedIn = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData || false
};

export const setLoggedUser = (data) => {
    const userData = JSON.stringify(data);
    localStorage.setItem('userData', userData);
}

export const loggedOutUser = async () => {
    // localStorage.removeItem('userData');
    localStorage.clear();
}