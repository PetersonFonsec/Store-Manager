import configs from "./../configs";
import jwt from "jsonwebtoken";

export default function generateToken(params) {
    return jwt.sign({ ...params }, configs.hash, {
        expiresIn: 10000
    })
}