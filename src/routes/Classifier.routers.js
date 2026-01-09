import {Router} from "express";
import {textclassify} from "../controllers/Text.controller.js"
const router=Router();

router.post("/classify",textclassify)




export default router;