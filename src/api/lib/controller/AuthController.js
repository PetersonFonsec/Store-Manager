import { Post, router } from "./../utils/decorators";
import db from "./../database";
import generateToken from "./../utils/generateToken";

export default class AuthController {
    router = router;

    @Post("/")
    async login(req, res) {
        try {
            db.find({ email: req.body.login, password: req.body.password }, (err, user) => {
                if (err) return res.send(err);
                
                if (user.length) {
                    return res.send({ ...user, token: generateToken(user._id)});
                } else {
                    return res.status(400).send("user not founded!");
                }
            })
        } catch (err) {
            res.send(err);
        }
    }

    @Post("/include")
    async include(req, res) {
        try {
            db.find({ ...req.body }, (err, user) => {
                if (err) return res.send(err);
                if (user.length) return res.send("User exists");

                db.insert(req.body, (err, doc) => {
                    return res.send({ ...doc, token: generateToken(doc._id)});
                });

            });
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}