const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, jobs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})
interiorRouter.post("/", (req, res, next) => {
    const savedJob = new Interior(req.body)
    savedJob.save((err, newJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newJob)
    })
})
module.exports = interiorRouter
