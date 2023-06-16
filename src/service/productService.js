import db from '../models/index';

let getAllProduct = (id) => {
    return  new Promise(async (resolve, reject) => {
        console.log(id)
        try{
            let products = ""
            if(id === 'ALL'){
                products = db.Product.findAll({})
            }
            if(id && id !== 'ALL'){
                products = await db.Product.findOne({
                    where: { id_product: id}
                })
            }
            resolve(products);
        }
        catch (e) {
            reject(e);
        }
    })
}
let findProductBySaling = (saling) => {
    return new Promise(async (resolve, reject) => {
        try{
            let products = ""
            if(saling === 1){
                products = db.Product.findAll({
                    where: { sale: saling}
                })
            }
            // if(id && id !== 'ALL'){
            //     products = await db.Product.findOne({
            //         where: { id_product: id}
            //     })
            // }
            resolve(products);
        }
        catch (e) {
            reject(e);
        }
    })
}
let findProductByType = (type) => {
    return new Promise(async (resolve, reject) => {
        try{
            let products = ""
            products = db.Product.findAll({
                where: { type_product: type}
            })
            resolve(products);
        }
        catch (e) {
            reject(e);
        }
    })
}
let createNewProduct = (data) => {
    return new Promise( async(resolve, reject) => {
        try {
            await db.Product.create({
                id_product: data.id_product,
                name: data.name,
                description: data.description,
                quantily: data.quantily,
                id_size: data.id_size,
                url_img: data.url_img,
                price: data.price,
                percent_sale: data.percent_sale,
                sale: data.sale
            })
            resolve({
                errcode: 0,
                message: 'OK'
            });
        } catch (e) {
            reject(e);
        }
    })
}
let editProduct = (data) => {
    return new Promise( async(resolve, reject) => {
        try{
                let product = await db.Product.findOne({
                where: { id: data.id }
            })
            await product.update(data);
            resolve(true)
        }
        catch(e){
            reject(e);
        }
    })
}
let deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            let product = await db.Product.findOne({
                where: { id: id }

            });
            await product.destroy(id);
            resolve('delete thanh cong')
        }
        catch(e){
            reject(e);
        }
    })
}
module.exports = {
    getAllProduct: getAllProduct,
    findProductBySaling: findProductBySaling,
    findProductByType: findProductByType,
    createNewProduct: createNewProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct
}