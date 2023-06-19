import typeService from '../service/typeService';

let handleGetAllType = async (req, res) => {
    try {
        let type = await typeService.getAllType();
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE',
            type: type
        })
    } catch (e) {
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message
        }) 
    }
}
let handleEditType = async (req, res) => {
    try {
        let type = {
            type_product: req.body.type_product,
            name: req.body.name
        }
        await typeService.editType(type)
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE'
        })
    } catch (e) {
        return res.status(200).json({
            errCode: 0,
            errMessage: e.message
        })
    }
}
let handleCreateType = async (req, res) => {
    try {
        let type = {
            type_product: req.body.type_product,
            name: req.body.name
        }
        await typeService.createNewType(type)
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE'
        })
    } catch (e) {
        return res.status(200).json({
            errCode: 0,
            errMessage: e.message
        })
    }
}
let handleDeleteType = async (req, res) => {
    try {
        let type_product = req.body.type_product
        await typeService.deleteType(type_product)
        return res.status(200).json({
            errCode: 0,
            message: 'OKE'
        })
    }
    catch (e) {
        return res.status(500).json({
            errCode: 1,
            message: e.message
        })
    }
}
module.exports = {
    handleGetAllType: handleGetAllType,
    handleEditType: handleEditType,
    handleCreateType: handleCreateType,
    handleDeleteType: handleDeleteType
}