import Product from "../models/product.js"

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find()
        res.send(allProducts);
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
};

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.send(newProduct);
    }
    catch (e) {

        console.log(e);
        res.send(e);
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('fournisseur');
        res.send(product);
    }
    catch (e) {
        console.log(e);
        res.send(e)
    }
};

const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate({ _id: req.params.id }, { ...req.body });
        res.send(updateProduct);
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
};
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id, req.body);
        res.send("Product deleted");
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
}
export default {
    getAllProducts,
    getProductById,
    updateProduct,
    addProduct,
    deleteProduct
}
