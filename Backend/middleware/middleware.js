import express from "express";
import bcrypt from "bcrypt";
import { saltRounds,pool } from "../config/config.js";
import pg from "pg"


export const login_credential = async function (req,res,next) {
    try{
        const { email,password } = req.body
            console.log(email,password);
            const hash = await bcrypt.hash(password,saltRounds);
            console.log(hash);
            const result = await pool.query(
                "INSERT INTO users(email,password) VALUES($1,$2)",
                [email, hash]
            );
            
            
            res.json({
                success:true,
                user:result.rows[0]
            });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ success:false })
    }

}