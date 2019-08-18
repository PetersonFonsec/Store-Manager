import nedb from "nedb";

export default new nedb({ filename: "banco.db", autoload: true });