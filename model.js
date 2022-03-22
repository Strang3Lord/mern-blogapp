import mongoose from "mongoose"

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },

    category: {
      type: String,
      required: true,
    },

    i1: String,
    i2: String,
    i3: String,

    body: {
      type: String,
      required: true,
    },
    b2: {
      type: String,
    },
    b3: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.model("Blog", blogSchema)

export default Blog
