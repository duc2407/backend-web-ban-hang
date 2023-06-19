import statusService from "../service/statusService"

let handleGetAllStatus = async(req, res) => {
    let id = req.body.id_status
    let status = await statusService.getAllStatus(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        status: status
    })
}
let handleCreateStatus = async(req, res) => {
    try {
        let status = {
            id: req.body.id,
            id_status: req.body.id_status,
            name: req.body.name
        }
        await statusService.createNewStatus(status);
        return res.status(200).json({
            err: 0,
            message: 'OKE'
        })
    } catch (e) {
        return res.status(500).json({
            err: 0,
            message: e.message
        })
    }
}
let handleEditStatus = async(req, res) => {
    try {
        let status = {
            id: req.body.id,
            id_status: req.body.id_status,
            name: req.body.name
        }
        await statusService.editStatus(status);
        return res.status(200).json({
            err: 0,
            message: 'OKE'
        })
    } catch (e) {
        return res.status(500).json({
            err: 0,
            message: e.message
        })
    }
}
let handleDeleteStatus = async(req, res) => {
    try {
        let id = req.body.id_status
        await statusService.deleteStatus(id)
        return res.status(200).json({
            err: 0,
            message: "OKE"
        })
    } 
    catch (e) {
        return res.status(500).json({
            err: 0,
            message: e.message
        })
    }
}
module.exports = {
    handleGetAllStatus: handleGetAllStatus,
    handleCreateStatus: handleCreateStatus,
    handleEditStatus: handleEditStatus,
    handleDeleteStatus: handleDeleteStatus
}