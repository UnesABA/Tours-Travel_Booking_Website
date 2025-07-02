import Booking from "../models/Booking.js"

//create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body)
  try {
    const savedBooking = await newBooking.save()

    return res.status(200).json({
      success: true,
      message: "Tour booked successfully!",
      data: savedBooking,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Unable to complete the booking.",
    })
  }
}

// get single booking
export const getSingleBooking = async (req, res) => {
  const id = req.params.id

  try {
    const book = await Booking.findById(id)

    return res.status(200).json({
      success: true,
      message: "book retrieved successfully!",
      data: book,
    })
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Booking not found",
    })
  }
}

// get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const books = await Booking.find({})

    return res.status(200).json({
      success: true,
      message: "Bookings retrieved successfully.",
      data: books,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve bookings.",
    })
  }
}

