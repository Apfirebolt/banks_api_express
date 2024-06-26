import asyncHandler from "express-async-handler";
import Bank from "../models/Bank.js";

// @desc    Get all banks
// @route   GET /api/banks
// @access  Public
const getBanks = asyncHandler(async (req, res) => {
  // get banks and show 50 results per page
  const pageSize = 50;
  const page = Number(req.query.page) || 1;

  // search keyword on name, city, and branch
  const keyword = req.query.keyword
    ? {
        $or: [
          { name: { $regex: req.query.keyword, $options: "i" } },
          { city: { $regex: req.query.keyword, $options: "i" } },
          { branch: { $regex: req.query.keyword, $options: "i" } },
        ],
      }
    : {};

  const count = await Bank.countDocuments({ ...keyword });
  const banks = await Bank.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ banks, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Get user by ID
// @route   GET /api/banks/:id
// @access  Public
const getBankById = asyncHandler(async (req, res) => {
  const bank = await Bank.findById(req.params.id);

  if (bank) {
    res.json(bank);
  } else {
    res.status(404);
    throw new Error("Bank not found");
  }
});

// @desc    Delete bank
// @route   DELETE /api/banks/:id
// @access  Private/Admin
const deleteBank = asyncHandler(async (req, res) => {
  const bank = await Bank.findById(req.params.id);

  if (bank) {
    await bank.remove();
    res.json({ message: "Bank removed" });
  } else {
    res.status(404);
    throw new Error("Bank not found");
  }
});

export { getBanks, getBankById, deleteBank };
