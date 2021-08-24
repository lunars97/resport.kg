import jwt from "jsonwebtoken";
const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    try {
        const token = authHeader.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
};
export default auth;
