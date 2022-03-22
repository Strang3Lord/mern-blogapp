import express from "express"
import routes from "./routes.js"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import Blog from "./model.js"
const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.use(
  cors({
    origin: "*",
  })
)

try {
  const conn = mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.bfovf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  console.log(`MongoDB Connected`)
  //   var new_user = new Blog({
  //     title: "Manish",
  //     body: "34",
  //     category: "tech",
  //   })

  //   new_user.save(function (err, result) {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       console.log(result)
  //     }
  //   })
} catch (error) {
  console.error(`Error: ${error.message}`)
  process.exit(1)
}

app.use("/blog", routes)

const port = process.env.PORT || 4000

app.listen(port, console.log(`server ${port}`))
