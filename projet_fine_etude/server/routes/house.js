import express from "express";
import { addInfo ,getHouseInfo, getHouseBooking} from "../controllers/house.js";



const router = express.Router();

router.get("/getHouseBooking/:userId",getHouseBooking)
router.post("/addInfo",addInfo)
router.get("/getHouseInfo/:userId",getHouseInfo)



export default router 