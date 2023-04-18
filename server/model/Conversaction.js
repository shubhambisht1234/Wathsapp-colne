import mongoose from "mongoose";

const ConversacionSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const convnersaction = mongoose.model(
  "convnersaction",
  ConversacionSchema
);
