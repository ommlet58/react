import express from "express";
import { register, login, updateHouseUser, showhUserInfo} from "../controllers/auth.js";



const router = express.Router();

router.post("/signup",register)
router.post("/login",login)
router.put('/updateHuser', updateHouseUser);
router.get("/showhUserInfo/:userId",showhUserInfo)


export default router 