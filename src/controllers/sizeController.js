import sizeService from '../service/sizeService';

let handleGetAllSize = async(req, res) => {
    let size = await sizeService.getAllSize();
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        size: size
    })
}
let handleGetSizeById = async(req, res) => {
    let id_size = req.body.id_size;
    console.log("test1: "+ id_size);
    let size = await sizeService.getSizeById(id_size);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        size: size
    })
}
let handleEditSize = async(req, res) => {
    try {
        let size = {
            id: req.body.id,
            id_size: req.body.id_size,
            name: req.body.name,
            size: req.body.size,
        }
        await sizeService.editSize(size)
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE',
        })
    } catch (error) {
        return res.status(500).json({
            errCode: 1,
            errMessage: error.errMessage,
        })
    }

}
let handleCreateSize = async(req, res) => {
    let message = await sizeService.createNewSize(req.body);
    return res.status(200).json(message);
}
let handleDeleteSize = async(req, res) => {
    let id = req.body.id_size;
    await sizeService.deleteSize(id)
    return res.status(200).json({
        err: 0,
        message: 'OKE',
    })
}
module.exports = {
    handleGetAllSize: handleGetAllSize,
    handleGetSizeById: handleGetSizeById,
    handleCreateSize: handleCreateSize,
    handleEditSize: handleEditSize, 
    handleDeleteSize: handleDeleteSize
}