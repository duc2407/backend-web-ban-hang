import express from "express"
import userController from "../controllers/userController"
import productController from "../controllers/productController"
import sizeController from "../controllers/sizeController"
import typeController from "../controllers/typeController"
import statusController from "../controllers/statusController"
import menuorderController from "../controllers/menuorderController"

let router = express.Router();
let initWebRoutes = (app) => {
    router.post('/api/login', userController.handleLoging);
    
    // Thêm sửa xóa tìm kiếm user
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.get('/api/get-all-user', userController.handleGetAllUsers);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    // thêm sửa xóa tìm kiếm sản phẩm 
    router.get('/api/get-all-product', productController.handleGetAllProducts);
    router.get('/api/get-all-product-saling', productController.handleGetAllProductSaling);
    router.get('/api/get-all-product-by-type', productController.handleGetAllProductByType);
    router.post('/api/create-product', productController.handleCreateProduct);
    router.put('/api/edit-product', productController.handleEditProduct);
    router.delete('/api/delete-product', productController.handleDeleteProduct);

    // thêm, sửa, xóa size hàng
    router.get('/api/get-all-size', sizeController.handleGetAllSize);
    router.put('/api/edit-size', sizeController.handleEditSize);
    router.post('/api/create-size', sizeController.handleCreateSize);
    router.delete('/api/delete-size', sizeController.handleDeleteSize);

    // thêm, sửa, xóa danh mục sản phẩm 
    router.get('/api/get-all-type-product', typeController.handleGetAllType);
    router.put('/api/edit-type-product', typeController.handleEditType);
    router.post('/api/create-type-product', typeController.handleCreateType);
    router.delete('/api/delete-type-product', typeController.handleDeleteType);

    // thêm, sửa, xóa trạng thái đơn hàng 
    router.get('/api/get-all-status', statusController.handleGetAllStatus);
    router.put('/api/edit-status', statusController.handleEditStatus);
    router.post('/api/create-status', statusController.handleCreateStatus);
    router.delete('/api/delete-status', statusController.handleDeleteStatus);

    // thêm, sửa, xóa, tìm kiếm đơn hàng theo mã đơn hàng 
    router.get('/api/get-all-menu-order', menuorderController.handleGetAllMenuOrder);
    // router.get('/api/get-all-product-saling', menuorderController.handleGetAllProductSaling);
    router.get('/api/get-all-product-by-number-order', menuorderController.handleGetAllProductById);
    router.post('/api/create-menu-order', menuorderController.handleCreateMenuOrder);
    router.put('/api/edit-menu-order', menuorderController.handleEditMenuOrder);
    router.delete('/api/delete-menu-order', menuorderController.handleDeleteMenuOrder);

    // check server 
    router.get('/', (req,res) => {
        res.send('server đã hoạt động')
    }); 

    return app.use("/", router);
}
module.exports = initWebRoutes;