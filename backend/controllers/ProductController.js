import {
  Where
} from "sequelize/types/utils.js";
import Product from "../models/ProductModel.js";
import path from "path";

import {
  where
} from "sequelize";


export const getProducts = async (req, res) => {

  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    console.log("Erorr 404 kuyy...");

  }

}

export const getProductsById = async (req, res) => {

  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(response);
  } catch (error) {
    console.log("Erorr 404 kuyy...");

  }

}

export const saveProduct = (req, res) => {

  if (req.files == null) return res.status(400).json({
    smg: "No FIle Upload"
  });
  const name = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;



}

export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {

}