const express = require("express");
const app = express()
const Books = require('../models/bookmodel')
const asynchandler = require("express-async-handler");


const GetBooks = async function (req , res){
    let allBooks = await Books.find();
    res.send(allBooks)
}


const CreateBook = async function (req, res) {
    const { title } = req.body;
    if (!title) {
      res.status(400);
      throw new Error("All fields are mandotary");
    } else {
      let Book = await Books.create({
      title
      });
  
      res.status(201).json(Book);
    }
  };

  const EditBookById = async function (req , res) {
    const { id } = req.params;
    const { title } = req.body

    try {
        const updatedBook = await Books.findByIdAndUpdate( id , { title  } , { new: true });
        
        res.send(updatedBook);
       
      } catch (error) {
        res.status(500).json({ message: "Error updating book" });
      }
    };
    
    const DeleteBookById = async function ( req , res ) {

        const Book = await Books.findByIdAndDelete(req.params.id)

        if(!Book) {
            res.status(404)
            throw new Error ("book not found")
        }
        res.status(200).json(Books)

    }


  module.exports = {CreateBook , GetBooks , EditBookById , DeleteBookById}