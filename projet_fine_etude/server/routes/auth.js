import express from "express";
import { register, login, updateHouseUser, showhUserInfo, logout} from "../controllers/auth.js";



const router = express.Router();

router.post("/signup",register)
router.post("/login",login)
router.put('/updateHuser', updateHouseUser);
router.get("/showhUserInfo/:userId",showhUserInfo)
router.post("/logout",logout)

export default router 