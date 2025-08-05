const EventForm = require("../Models/Notes_Schema");


const Eventform = async (req, res) => {
  const {
    EventName,
    Description,
    Date,
    createdBy
  } = req.body;

  try {
    if (
      !EventName ||
      !Description ||
      !Date ||
      !createdBy
    ) {
      return res.status(400).json({ message: "Fill all required fields" });
    }
  
    const newEvent = new EventForm({
  EventName,
  Description,
  Date,
  createdBy,
});

    await newEvent.save();

    return res.status(201).json({ message: "Event created", event: newEvent });
  } catch (error) {
    console.error("Event creation error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = Eventform;
