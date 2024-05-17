import mongoose from "mongoose";

const bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ifsc: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    centre: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: false,
    },
    upi: {
      type: Boolean,
      required: true,
      default: true
    },
    rtgs: {
      type: Boolean,
      required: true,
      default: true
    },
    neft: {
      type: Boolean,
      required: true,
      default: true
    },
  },
  {
    timestamps: true,
  }
);

const Bank = mongoose.model("Bank", bankSchema);

export default Bank;
