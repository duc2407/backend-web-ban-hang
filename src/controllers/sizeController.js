import sizeService from '../service/sizeService';

let handleGetAllSize = async(req, res) => {
    let size = await sizeService.getAllSize();
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        size: size
    })
}
let handleEditSize = async(req, res) => {

}
let handleCreateSize = async(req, res) => {

}
let handleDeleteSize = async(req, res) => {

}
module.exports = {
    handleGetAllSize: handleGetAllSize,
    handleCreateSize: handleCreateSize,
    handleEditSize: handleEditSize, 
    handleDeleteSize: handleDeleteSize
}