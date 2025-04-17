const Book = require("./book.model");

const postABook = async (req, res) =>{
    try{
        const newBook = await Book({...req.body})
        await newBook.save();
        res.status(200).send({message : "Book posted successfully", book: newBook})
    }
    catch(error) {
        console.error("Error creating book", error);
        res.status(500).send({messege : "Failed to create book"})
    }
}


// get all books
const getAllBooks = async (req, res) =>{
      try {
        const books = await Book.find().sort({ createdAt: -1});
        res.status(200).send(books)
        
      } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({messege : "Failed to create book"})
      }

}

// get a single book

const getASingleBook = async(req, res)=>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id)
        if(!book){
            res.status(400).send({message : "Book not Found"})
        }
        res.status(200).send(book)

        
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({messege : "Failed to fetch book"})
    }
}

const updateBook = async(req, res) =>{
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new:true});
        if(!updatedBook){
            res.status(400).send({message : "Book not Found"})
        }
        res.status(200).send({
            message: "Book updated successfully!",
            book: updatedBook
        })

        
    } catch (error) {
        console.error("Updating a book", error);
        res.status(500).send({messege : "Failed to update a book"})
    }
}

const deleteABook = async (req, res) =>{
    try {
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book deleted successfully!",
            book: deletedBook
        })
        
    } catch (error) {
        console.error("Error deleting a book", error);
        res.status(500).send({messege : "Failed to delete a book"})
    }

}



module.exports = {
    postABook,
    getAllBooks,
    getASingleBook,
    updateBook,
    deleteABook
}