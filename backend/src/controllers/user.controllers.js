import { request, response } from "express";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt';


export const registerUser = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: `All Fields are required`
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(403).json({
                success: false,
                message: `User with this email already exist`
            })
        };

        const user = new User({
            username,
            email,
            password
        });

        await user.save();

        return res.status(201).json({
            success: true,
            message: `User Created Successfully`,
            data: {
                id: user._id,
                email: user.email,
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error`,
            error: error.message
        })
    }
};


export const loginUser = async (req, res) => {
    
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: `All Fields are reqired`
            });
        }

        const checkUser = await User.findOne({ email });

        if (!checkUser) {
            return res.status(410).json({
                success: false,
                message: `Invalid email or password`
            })
        }

        const checkPassword = await bcrypt.compare(password, checkUser.password);

        if(!checkPassword){
            return res.status(401).json({
                success: false,
                message: `Invalid email or password`,
            })
        };

        return res.status(200).json({
            success: true,
            message: `Login Successfully`,
            data: {
                email : checkUser.email,
            }
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Something Went Wrong`,
            error: error.message
        })
    }


}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password"); 
        return res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};