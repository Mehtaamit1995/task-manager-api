// ------------------ task model ------------------

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //reference to the other user model
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

// const newtask = new Task({
//   description: "have lunch!",
//   //   completed: false,
// });
// newtask
//   .save()
//   .then(() => {
//     console.log(newtask);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

module.exports = Task;
