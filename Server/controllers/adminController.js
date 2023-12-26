import Admin from "../model/Admin.js";
import bcrypt from "bcrypt";
import sendCookie from "../utils/sendCookie.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// SignUp User
export const signUp = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let admin = await Admin.findOne({ username });

    if (admin) return next(new ErrorHandler("admin Already Exist", 404));

    const hashPassword = await bcrypt.hash(password, 10);

    admin = await Admin.create({ username, password: hashPassword });

    // calling function for send the response from utils
    sendCookie(res, admin, 201, "Registerd Succesfully");
  } catch (error) {
    next();
  }
};

// Admin login
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let admin = await Admin.findOne({ username });

    if (!admin) return next(new ErrorHandler("Invalid email", 400));

    const isMatchPassword = await bcrypt.compare(password, admin.password);

    if (!isMatchPassword) return next(new ErrorHandler("Invalid Password"));

    sendCookie(res, admin, 200, `Welcome back ${admin.username}`);
  } catch (error) {
    next(error);
  }
};

// admin Logout
export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
      })
      .json({
        success: true,
        message: "session finish / Logout succesfull",
      });
  } catch (error) {
    next(error);
  }
};
