const User = require('../models/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require("../utils/sendEmail");
require('dotenv').config();

const signup = async (req, res) => {
    try {
        console.log("API hit");
        const { name, email, password, role, age, gender, health_conditions, dosha_type, specialization, clinic_name, phone } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "Name, email, password, and role are required" });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = {
            name,
            email,
            password: hashedPassword,
            role,
            contact: { phone }
        };

        if (role === "Doctor") {
            userData.specialization = specialization;
            userData.clinic_name = clinic_name;
        }

        if (role === "Patient") {
            userData.age = age;
            userData.gender = gender;
            userData.health_conditions = health_conditions || [];
            userData.dosha_type = dosha_type || "Unknown";
        }

        const newUser = new User(userData);
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(200).json({
            message: "Successful Login",
            user,
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;

        if (!token || !newPassword) {
            return res.status(400).json({ message: 'Token and new password are required' });
        }

        const user = await User.findOne({ resetToken: token });
        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetToken = undefined;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        const resetToken = Math.floor(1000 + Math.random() * 9000).toString();
        user.resetToken = resetToken;
        await user.save();

        const emailSent = await sendEmail(user.email, "Password Reset", `Your OTP is ${resetToken}`);
        if (!emailSent) {
            return res.status(500).json({ message: "Failed to send reset OTP" });
        }

        res.status(200).json({ message: "Reset OTP sent successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Export all controllers together
module.exports = { signup, login, forgetPassword, resetPassword };
