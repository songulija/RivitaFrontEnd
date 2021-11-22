export const getActiveUser = () =>{
    const role = Cookies.get('role');
    return role;
}