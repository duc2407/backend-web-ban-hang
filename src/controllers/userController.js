import userService from '../service/userService';

let handleLoging = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userService.handleUserLogin(email, password)
    //check email exist
    //password nhap vao ko dung
    //return userInfor
    // access_token :JWT json web token

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);

}
let handleGetAllUsers = async(req, res) => {
    let id = req.body.id;
    console.log(id)
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'MISSING REQUIRED PARAMETER',
            user: []
        })
    }
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        user: users
    })
}
let handleEditUser = async(req, res) =>{
    try{
        let user = {
            id: req.body.id, 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            roleId: req.body.roleId,
        }
        await userService.editUser(user);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE',
        })
    }
    catch(e){
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message
        })
    }
}
let handleDeleteUser = async(req, res) =>{
    try{
        let id = req.body.id;
        await userService.deleteUser(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE'
        })
    }
    catch(e){
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message
        })
    }
}
module.exports = {
    handleLoging: handleLoging,
    handleCreateNewUser: handleCreateNewUser,
    handleGetAllUsers: handleGetAllUsers,
    handleEditUser :handleEditUser,
    handleDeleteUser: handleDeleteUser
}