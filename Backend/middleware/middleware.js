import express from "express";
import bcrypt from "bcrypt";
import { saltRounds } from "../config/config";

export const login_credential = function (req,res,next) {
    const { email,password } = req.body
    console.log(email,password);
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            console.log(hash);
            
        });
    });
    res.json({success: false});
}