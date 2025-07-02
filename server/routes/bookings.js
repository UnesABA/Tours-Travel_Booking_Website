import express from "express"
import {
  createBooking,
  getAllBookings,
  getSingleBooking,
} from "../controllers/bookingController.js"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/", verifyUser, createBooking)
router.get("/:id", verifyUser, getSingleBooking)
router.get("/", verifyAdmin, getAllBookings)

export default router