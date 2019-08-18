import { Router } from "express";

export const router = Router();

export function Post(url) {
    return (target) => {
        router.post(url, (req, res) => {
            target.descriptor.value(req, res);
        });
    };
}

export function Get(url) {
    return (target) => {
        router.get(url, (req, res) => {
            target.descriptor.value(req, res);
        });
    };
}

export function Put(url) {
    return (target) => {
        router.put(url, (req, res) => {
            target.descriptor.value(req, res);
        });
    };
};

export function Delete(url) {
    return (target) => {
        router.delete(url, (req, res) => {
            target.descriptor.value(req, res);
        });
    };
}