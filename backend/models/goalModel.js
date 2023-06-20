import mongoose from "mongoose";

const modelSchema = mongoose.Schema(
  {
    text: {
      type: String,
      // required: true
      // We can also use the required field as bellow
      required: [true, "Please add a text value"],
    },
  },
  {
    timeStamp: true,
  }
);

// module.exports = mongoose.model("Goal", modelSchema);
export default mongoose.model("Goal", modelSchema);
