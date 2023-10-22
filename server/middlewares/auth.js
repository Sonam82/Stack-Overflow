import Jwt from "jsonwebtoken";

const auth = (req, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    decodeData = Jwt.verify(token, process.env.JWT_SECRET);

    decodeData = Jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
