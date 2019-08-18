import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import UserController from "./controller/UserController";
import AuthController from "./controller/AuthController";
import auth  from "./middlewares/auth";

const app = express();
const User = new UserController();
const Auth = new AuthController();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/user', auth);

app.use("/user", User.router);
app.use("/auth", Auth.router);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Port: ${3000}`)
});

export default app;