const router = require("express").Router();
const Product = require("../db/Product");
const products = require("../constant");


// Post all products in data base
const defaultData = async()=>{
    try {
        const data = await Product.insertMany(products);
        console.log("Default data saved successfully", data.length);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// defaultData();

// Fetch all products
router.get("/", async (req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Fetch single product
router.get("/:id", async (req,res)=>{
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// Fetch category wise products
router.get("/category/:category", async (req,res)=>{
    try {
        const category = (req.params.category).toUpperCase();
        const products = await Product.find({category : category});
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;