import { Router } from "express";
const router = Router();

import * as productCTRL from '../controllers/products.controller';
import { verifyToken } from "../middlewares/authJwt";

router.get('/',productCTRL.getProducts);
router.post('/',verifyToken,productCTRL.createProduct);
router.get('/:producID', productCTRL.getProductsbyid);
router.put('/:productId', verifyToken, productCTRL.updateProduct);
router.delete('/:productId',verifyToken, productCTRL.deleteProduct);

export default router;
