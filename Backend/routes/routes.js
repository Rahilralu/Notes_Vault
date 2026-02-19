import express from "express";
import { login_credential } from "../middleware/middleware.js";

const router = express.Router();

router.get('/',(req,res) => {
    res.send('HAHAHA')
})

router.post('/login',login_credential)

export default router;