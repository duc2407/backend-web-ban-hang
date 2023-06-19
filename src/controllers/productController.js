import productService from '../service/productService';

let handleGetAllProducts = async(req, res) => {
    let id = req.body.id_product;
    if(!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'MISSING REQUIRED PARAMETER'
        })
    }
    let product = await productService.getAllProduct(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        product: product
    })
}
let handleGetAllProductSaling = async(req, res) => {
    let check = req.body.sale;
    if ( !check ) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'MISSING REQUIRED PARAMETER'
        })
    }
    let product = await productService.findProductBySaling(check);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        product: product
    })
}
let handleGetAllProductByType = async(req, res) => {
    let type = req.body.type_product;
    if ( !type ) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'MISSING REQUIRED PARAMETER'
        })
    }
    let product = await productService.findProductByType(type);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        product: product
    })
}
let handleCreateProduct = async(req, res) => {
    let message = await productService.createNewProduct(req.body);
    return res.status(200).json(message);
}
let handleEditProduct = async(req, res) => {
    try {
        let product = {
            id: req.body.id,
            id_product: req.body.id_product,
            name: req.body.name,
            description: req.body.description,
            quantily: req.body.quantily,
            id_size: req.body.id_size,
            url_img: req.body.url_img,
            price: req.body.price,
            percent_sale: req.body.percent_sale,
            sale: req.body.sale
        }
        await productService.editProduct(product)
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE',
        })
    } 
    catch (e) {
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message
        })
    }
}
let handleDeleteProduct = async(req, res) => {
    try{
        let id = req.body.id;
        await productService.deleteProduct(id);
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
    handleGetAllProducts: handleGetAllProducts,
    handleGetAllProductSaling: handleGetAllProductSaling,
    handleGetAllProductByType: handleGetAllProductByType,
    handleCreateProduct: handleCreateProduct,
    handleEditProduct: handleEditProduct,
    handleDeleteProduct: handleDeleteProduct
}