import Tour from "../models/Tour.js"

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body)

  try {
    const savedTour = await newTour.save()

    return res.status(200).json({
      success: true,
      message: "Tour created successfully.",
      data: savedTour,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create the tour. Please try again later.",
    })
  }
}

export const updateTour = async (req, res) => {
  const id = req.params.id

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )

    return res.status(200).json({
      success: true,
      message: "Tour updated successfully.",
      data: updatedTour,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update the tour. Please try again later.",
    })
  }
}

export const deleteTour = async (req, res) => {
  const id = req.params.id

  try {
    await Tour.findByIdAndDelete(id)

    return res.status(200).json({
      success: true,
      message: "Tour deleted successfully.",
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update the tour. Please try again later.",
    })
  }
}

export const getSingleTour = async (req, res) => {
  const id = req.params.id

  try {
    const tour = await Tour.findById(id).populate("reviews")

    return res.status(200).json({
      success: true,
      message: "Tour fetched successfully.",
      data: tour,
    })
  } catch (error) {
    return res.status(404).json({
      success: false,
      message:
        "Could not find the tour. It may not exist or something went wrong.",
    })
  }
}

export const getAllTours = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page)

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8)

    return res.status(200).json({
      success: true,
      count: tours.length,
      message: "Tours fetched successfully.",
      data: tours,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "Could not find any tour. It may not exist or something went wrong.",
    })
  }
}

//get tour by search
export const getTourBySearch = async (req, res) => {
  // here "i" means case insensitive
  const city = new RegExp(req.query.city, "i")
  const distance = parseInt(req.query.distance)
  const maxGroupSize = parseInt(req.query.maxGroupSize)

  try {
    // gte means greather than or equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews")
    return res.status(200).json({
      success: true,
      message: "Matching tours retrieved successfully.",
      data: tours,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "No tours found matching your criteria. Please refine your search or try again later.",
    })
  }
}

//get featured tours
export const getFeaturedTours = async (req, res) => {
  try {
    const featuredTours = await Tour.find({
      featured: true,
    })
      .populate("reviews")
      .limit(8)
    return res.status(200).json({
      success: true,
      count: featuredTours.length,
      message: "Featured tours retrieved successfully.",
      data: featuredTours,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No featured tours found. try again later.",
    })
  }
}

// get tour counts
export const getToursCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount()
    return res.status(200).json({
      success: true,
      data: tourCount,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch",
    })
  }
}
