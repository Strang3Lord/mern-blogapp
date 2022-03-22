import express from "express"
import asyncHandler from "express-async-handler"
import Blog from "./model.js"
import multer from "multer"
import cloudinary from "cloudinary"
const router = express.Router()
import CloudinaryService from "./cloudinary.js"

router
  .route("/")
  .get(
    asyncHandler(async (req, res) => {
      const blogs = await Blog.find({})
      res.json(blogs)
    })
  )
  .post(
    asyncHandler(async (req, res) => {
      const { title, body, i1, i2, i3, b2, b3 } = req.body

      const blog = new Blog({
        title: title,
        i1: i1,
        i2: i2,
        i3: i3,
        category: "Sample category",
        body: body,
        b2: b2,
        b3: b3,
      })

      const createdBlog = await blog.save()
      res.status(201).json(createdBlog)
    })
  )

router
  .route("/:id")
  .get(
    asyncHandler(async (req, res) => {
      const blog = await Blog.findById(req.params.id)

      if (blog) {
        res.json(blog)
      } else {
        res.status(404)
        throw new Error("blog not found")
      }
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      const blog = await Blog.findById(req.params.id)

      if (blog) {
        await blog.remove()
        res.json({ message: "blog removed" })
      } else {
        res.status(404)
        throw new Error("blog not found")
      }
    })
  )

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname)
  },
})

const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/i)) {
    return cb(new Error("Only image files are allowed!"), false)
  }
  cb(null, true)
}

const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: { fileSize: 5000000 },
})

router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "myBlog",
    })
    res.send(`${result.url}`)
  } catch (error) {
    console.log(error)
  }
})

export default router
