import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  steamId: String,
  gameName: String,
  reviewText: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Review", ReviewSchema);
