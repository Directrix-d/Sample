import Sample from "../Model/Sample.js";

export const getProduct = async (req, res) => {   
    try {
      let products;
        products = await Sample.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  export const findbyId = async  (req, res) =>{
    try{
      const product = await Sample.findById(req.params.id);
      res.status(200).json(product)

    }catch(err){
      res.status(500).json(err)
    }
  }
  export const SearchProduct = async(req,res) => {
    try{

    }
    catch{
      res.status(500).json(err)
    }
  }