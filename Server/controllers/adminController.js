import Admin from "../model/Admin.js";
import bcrypt from "bcrypt";
import sendCookie from "../utils/sendCookie.js"
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
