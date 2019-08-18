import {
    router,
    Get,
    Put,
    Delete
} from "./../utils/decorators";
import db from "./../database";

export default class UserController {
    router = router;

    @Get("/")
    async getAll(req, res) {
        try {
            db.find({}, (err, users) => {
                if (err) return res.send(err);

                return res.send(users);
            });
        } catch (err) {
            res.status(400).send(err);
        }
    }
    
    @Get("/:id")
    async getOne(req, res) {
        try {
            db.find({ _id: req.params.id }, (err, user) => {
                if (err) return res.send(err);

                return res.send(user);
            })
        } catch (err) {
            res.status(400).send(err);
        }
    }

    @Put("/:id")
    async update(req, res) {
        try {
            db.update({ _id: req.params.id }, req.body, {}, (err) => {
                if (err) return res.send(err);
                
                return res.status(200).send("ok");
            });
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    @Delete("/:id")
    async delete(req, res) {
        try {
            db.delete({ _id: req.params.id }, {}, (err) => {
                if (err) return res.send(err);

                return res.send("ok");
            });
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    get Router() {
        return this.router;
    }
}