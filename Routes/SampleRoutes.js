import express from "express"
import { findbyId, getProduct } from "../Controller/sample.js";


const SampleRoutes = express.Router();

SampleRoutes.get('/',getProduct);
SampleRoutes.get('/find/:id',findbyId);
export default SampleRoutes;