import express from "express";
import { addInfo ,getHouseInfo, getHouseBooking, getHouseBookingToday , getHouseBookingmonth, getHouseBookingYear} from "../controllers/house.js";



const router = express.Router();

router.get("/getHouseBooking/:userId",getHouseBooking)
router.post("/addInfo",addInfo)
router.get("/getHouseInfo/:userId",getHouseInfo)
router.get("/getHouseBookingToday/:userId",getHouseBookingToday)
router.get("/getHouseBookingmonth/:userId",getHouseBookingmonth)
router.get("/getHouseBookingYear/:userId",getHouseBookingYear)



export default router 