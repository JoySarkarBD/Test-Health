const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
mongoose.set("strictQuery", false);
require("dotenv").config();

// Function to seed an admin user into the database
async function seedAdminUser() {
  try {
    // Check if an admin user already exists
    const adminUserExists = await User.exists({ role: "admin" });

    if (!adminUserExists) {
      // If no admin user exists, create a new admin user
      const adminUserData = {
        firstname: "Admin",
        lastname: "User",
        email: "admin@admin.com",
        password: await bcrypt.hash("12345678", 10),
        isAdmin: true,
        isDoctor: true,
        age: null,
        gender: "neither",
        mobile: null,
        address: "",
        status: "accepted",
      };

      // Create the admin user in the database
      const adminUser = await User.create(adminUserData);

      if (adminUser) {
        // Log success if admin user is created
        console.log("Admin user created successfully");
      } else {
        // Log error if admin user creation fails
        console.error("Error creating admin user");
      }
    } else {
      // Log if an admin user already exists
      console.log("Admin user already exists");
    }
  } catch (error) {
    // Log error if there is an issue with seeding the admin user
    console.error("Error seeding admin user", error.message);
  }
}
const client = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(async () => {
    console.log("DB connected");
    await seedAdminUser();
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
