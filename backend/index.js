const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const cors = require("cors")

require('dotenv').config()


// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://book-app-frontend-silk.vercel.app"],
    credentials: true,
}))

const bookRoutes = require("./src/books/book.route")
app.use("/api/books" ,bookRoutes)

const orderRoutes = require("./src/orders/order.route")
app.use("/api/orders", orderRoutes)

const userRoutes = require("./src/users/user.route")
app.use("/api/auth", userRoutes)

const adminRoutes = require("./src/stats/admin.stats")
app.use("/api/admin", adminRoutes)


async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.use('/', (req, res) => {
    res.send('Book Store server is running!')
  })

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().then(()=>console.log("MongoDB connected Successfully !!")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
