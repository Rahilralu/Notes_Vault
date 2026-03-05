import express from "express";
import bcrypt from "bcrypt";
import { saltRounds,pool } from "../config/config.js";
import pg from "pg"


export const login_credential = async function (req,res,next) {
    try{
        const { email,password,type } = req.body
        console.log(email,password,type);
        if(type === 'Sign-In'){
            const result = await pool.query(
                "SELECT email, password FROM users WHERE email = $1",
                [email]
            );
            if (result.rows.length === 0) {
                return res.status(401).json({ success:false, message:"User not found" });
            }
            const user = result.rows[0];
            const storedHash = user.password;
            const isMatch = await bcrypt.compare(password,storedHash);
             if(type === 'Sign-In'){
            const result = await pool.query(
                "SELECT email, password FROM users WHERE email = $1",
                [email]
            );
            if (result.rows.length === 0) {
                return res.status(401).json({ success:false, message:"User not found" });
            }
            const user = result.rows[0];
            const storedHash = user.password;
            const isMatch = await bcrypt.compare(password,storedHash);
            if(isMatch){
                res.json({
                    success:true,
                    users:result.rows[0]
                })
            }
        }
        }

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