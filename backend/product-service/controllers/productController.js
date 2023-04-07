const Product = require("../models/ProductModel");

const createNewProduct = async (req, res) => {
  const { raMediName, raMediDesc } = req.body;
  try {
    const newProduct = await Product({
      raMediName,
      raMediDesc,
    });

    await newProduct.save();
    res.status(200).send("New Product Created !!!!" + newProduct);

  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteAProduct = async (req, res) => {
  const raPId = req.params.id;
  try{
  const raMediId = await Product.findById(raPId);
  }catch(error){
    res.status(400).json(error);
  }
};

module.exports = { createNewProduct };
