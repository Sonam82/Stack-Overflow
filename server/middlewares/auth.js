import Jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodeData = Jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
