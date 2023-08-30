import { response, request } from "express";

export const usersGet = (req = request, res = response) => {

    const {q = null, api_key} = req.query

    res.json({
        msg: "Response from controller GET",
        q,
        api_key
    })
}

export const userPost = (req, res = response) => {

    const {name, edad} = req.body;
    res.json({
        msg: "Response from controller POST",
        name,
        edad
    })
}

export const userPut = (req, res = response) => {

    const {id, text} = req.params
    res.json({
        msg: "Response from controller PUT",
        id,
        text
    })
}

export const userPatch = (req, res = response) => {
    res.json({
        msg: "Response from controller PATCH"
    })
}

export const userDelete = (req, res = response) => {
    res.json({
        msg: "Response from controller DELETE"
    })
}