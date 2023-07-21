import express from 'express';
import mongoose from 'mongoose';

import Model from '../models/userModels.js';

const router = express.Router();

export const addUser = async (req, res) => { 
    new Model(req.body)
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export const getAll = async (req, res) => { 
    Model.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export const authenticate = async (req, res) => {
    Model.find(req.body)
    .then((result) => {
      if (result !== null) {
        res.json(result);
      } else {
        res.status(401).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}



export default router;