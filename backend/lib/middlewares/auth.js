import { verify } from "jsonwebtoken";
import configs from "../configs";

export default function auth(req, res, next) {
    const authHeader = req.headers.access;

    if (!authHeader) {
        return res.status(400).send("No token sended!");
    }

    const authSplit = authHeader.split(" ");

    if (authSplit.length !== 2) {
        return res.status(400).send("Token invalid");
    }

    const [schema, token] = authSplit;

    if (!/^Bearer/.test(schema)) {
        return res.status(400).send("Token invalid");
    }

    verify(token, configs.hash, (err, decoded) => {
        if (err) return res.status(400).send("token invalid!");

        req.userId = decoded.id;

        next();
    });
}