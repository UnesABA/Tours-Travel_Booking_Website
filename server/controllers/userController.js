import User from "../models/User"

// create a user
export const createUser = async (req, res) => {
  const newUser = new User(req.body)

  try {
    const savedUser = await User.save(newUser)

    return res.status(200).json({
      success: true,
      message: "User saved successfully.",
      data: savedUser,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create the user. Please try again later.",
    })
  }
}

export const updateUser = async (req, res) => {
  const id = req.params.id

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create the user. Please try again later.",
    })
  }
}

export const deleteUser = async (req, res) => {
  const id = req.params.id

  try {
    await User.findByIdAndDelete(id)

    return res.status(200).json({
      success: true,
      message: "User deleted successfully.",
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update the user. Please try again later.",
    })
  }
}

export const getSingleUser = async (req, res) => {
  const id = req.params.id

  try {
    const user = await User.findById(id)

    return res.status(200).json({
      success: true,
      message: "User fetched successfully.",
      data: user,
    })
  } catch (error) {
    return res.status(404).json({
      success: false,
      message:
        "Could not find the user. It may not exist or something went wrong.",
    })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})

    return res.status(200).json({
      success: true,
      message: "Users fetched successfully.",
      data: users,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "Could not find any user. It may not exist or something went wrong.",
    })
  }
}