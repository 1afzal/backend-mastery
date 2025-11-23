import express from "express";
const app = express();
import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://Afza1:Afzal123@secret.b5cmo.mongodb.net/mongoDB-practice";
import userModel from "./db.js";

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

async function insertData() {
    try {
        const user = await userModel.create({
            mail: "afzalali5256@gmail.com",
            name: "Afzal Ali Ahmed",
            password: "afzal@123" 
        });
        console.log("User inserted:", user);
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

async function deleteData(mail) {
    try {
        const deletedUser = await userModel.deleteOne({
            mail: mail
        });
        
        if (deletedUser.deletedCount > 0) {
            console.log(`User with email ${mail} deleted successfully`);
        } else {
            console.log(`No user found with email ${mail}`);
        }
        
        return deletedUser;
    } catch (err) {
        console.error("Error in deleting:", err);
    }
}

async function updateData(mail, newName, newPassword) {
    try {
        // First argument: filter (which document to update)
        // Second argument: update object (what to update)
        const updatedUser = await userModel.findOneAndUpdate(
            { mail: mail },  // Filter: find user by email
            { 
                name: newName,
                password: newPassword 
            },
            { new: true }  // Option: return the updated document
        );
        
        if (updatedUser) {
            console.log("User updated:", updatedUser);
        } else {
            console.log(`No user found with email ${mail}`);
        }
        
        return updatedUser;
    } catch (err) {
        console.error("Error in updating:", err);
    }
}

// Main execution function
async function main() {
    await connectDB();
    
    // Insert a user
    await insertData();
    
    // Update the user
    await updateData("afzalali5256@gmail.com", "Afzal Updated", "newPassword123");
    
    // Delete the user
    await deleteData("afzalali5256@gmail.com");
    
    // Close connection when done
    await mongoose.connection.close();
    console.log("Database connection closed");
}

// Run the main function
main().catch(err => {
    console.error("Error in main execution:", err);
    process.exit(1);
});