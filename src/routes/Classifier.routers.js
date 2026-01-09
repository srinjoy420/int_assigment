import {Router} from "express";
import {textclassify,getalltext} from "../controllers/Text.controller.js"
const router=Router();

router.post("/classify",textclassify)
router.get("/getall",getalltext)




export default router;